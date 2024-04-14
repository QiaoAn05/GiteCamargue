<?php

namespace App\Controller;

use App\Entity\Gite;
use App\Repository\GiteRepository;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;

class GiteController extends AbstractController
{
    #[Route('/gite', name: 'app_gite')]
    public function index(): Response
    {

        return $this->render('gite/gite.html.twig');
    }

    #[Route('gites/read', name: 'gites_read', methods: 'GET')]
    public function show(GiteRepository $giteRepository): Response
    {
        $gites = $giteRepository->findAll();
    
        // Ajouter le chemin d'accès complet aux images
        $gitesWithImages = [];
        foreach ($gites as $gite) {
            $imagePath = '/images/gite/' . $gite->getImageName();
            $giteArray = [
                'id' => $gite->getId(),
                'name' => $gite->getName(),
                'maxPerson' => $gite->getMaxPerson(),
                'description' => $gite->getDescription(),
                'image' => $imagePath, // Ajouter le chemin d'accès à l'image dans le tableau
            ];
            $gitesWithImages[] = $giteArray;
        }
    
        // Retourner la liste des gîtes avec les chemins d'accès aux images
        return new JsonResponse($gitesWithImages, Response::HTTP_OK);
    }

    #[Route('/gite/create', name: 'gite_create', methods: ['POST'])]
    public function create(Request $request, EntityManagerInterface $entityManager): Response
    {
        $data = $request->request->all();

        $gite = new Gite();
        $gite->setName($data['giteName']);
        $gite->setMaxPerson($data['giteMaxPerson']);
        $gite->setDescription($data['giteDescription']);
        
        // Gérer l'upload de fichier
        $imageFile = $request->files->get('imageFile');
        if ($imageFile) {
            $imageName = md5(uniqid()) . '.' . $imageFile->guessExtension();
            $imageFile->move(
                $this->getParameter('kernel.project_dir') . '/public/images/gite',
                $imageName
            );
            $gite->setImageName($imageName);
        }

        $now = new \DateTime();
        $gite->setCreatedAt($now);
        $gite->setUpdatedAt($now);
        
        $entityManager->persist($gite);
        $entityManager->flush();

        return new JsonResponse(['message' => 'Gite créé avec succès'], Response::HTTP_CREATED);
    }

    #[Route('gite/edit/{id}', name: 'gite_edit')]
    public function update(Request $request, GiteRepository $giteRepository, EntityManagerInterface $entityManager, int $id): Response
    {
        $gite = $giteRepository->find($id);

        if (!$gite) {
            throw $this->createNotFoundException('No gite found for id ' . $id);
        }

        $data = json_decode($request->getContent(), true);

        // Mettre à jour les propriétés du gîte
        $gite->setName($data['giteName'] ?? $gite->getName());
        $gite->setMaxPerson($data['giteMaxPerson'] ?? $gite->getMaxPerson());
        $gite->setDescription($data['giteDescription'] ?? $gite->getDescription());

        // Vérifier si une nouvelle image a été envoyée
        if ($request->files->get('giteImageFile')) {
            /** @var UploadedFile $imageFile */
            $imageFile = $request->files->get('giteImageFile');

            // Gérer l'upload de la nouvelle image
            $imageName = md5(uniqid()) . '.' . $imageFile->guessExtension();
            $imageFile->move(
                $this->getParameter('kernel.project_dir') . '/public/images/gite',
                $imageName
            );

            // Mettre à jour le nom de l'image du gîte
            $gite->setImageName($imageName);
        }

        // Enregistrer les modifications dans la base de données
        $entityManager->flush();

        // Rediriger vers la page des gîtes après la mise à jour
        return $this->redirectToRoute('app_gite');
    }

    #[Route('gite/delete/{id}', name: 'gite_delete', methods: 'DELETE')]
    public function delete(GiteRepository $giteRepository, EntityManagerInterface $entityManager, int $id): Response
    {
        $gite = $giteRepository->find($id);

        if (!$gite) {
            throw $this->createNotFoundException(
                'No product found for id '.$id
            );
        }

        $entityManager->remove($gite);
        $entityManager->flush();

        return $this->redirectToRoute('app_gite');
    }

}
