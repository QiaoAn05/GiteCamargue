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

    #[Route('/gite/edit/{id}', name: 'gite_edit', methods: ['POST'])]
    public function update(Request $request, EntityManagerInterface $entityManager, int $id): Response
    {
        $gite = $entityManager->getRepository(Gite::class)->find($id);
    
        if (!$gite) {
            throw $this->createNotFoundException('No gite found for id ' . $id);
        }
    
        // Récupérer les données du formulaire
        $formData = $request->request->all();
    
        // Vérifier si une nouvelle image a été envoyée
        if ($request->files->get('imageFile')) {
            // Supprimer l'ancienne image
            $oldImageName = $gite->getImageName();
            if ($oldImageName) {
                $oldImagePath = $this->getParameter('kernel.project_dir') . '/public/images/gite/' . $oldImageName;
                if (file_exists($oldImagePath)) {
                    unlink($oldImagePath);
                }
            }
    
            // Télécharger et gérer la nouvelle image
            /** @var UploadedFile $imageFile */
            $imageFile = $request->files->get('imageFile');
    
            // Gérer l'upload de la nouvelle image
            $imageName = md5(uniqid()) . '.' . $imageFile->guessExtension();
            $imageFile->move(
                $this->getParameter('kernel.project_dir') . '/public/images/gite',
                $imageName
            );
    
            // Mettre à jour le nom de l'image du gîte
            $gite->setImageName($imageName);
        }
    
        // Mettre à jour les autres propriétés du gîte si elles ne sont pas vides
        if (!empty($formData['giteName'])) {
            $gite->setName($formData['giteName']);
        }
        if (!empty($formData['giteMaxPerson'])) {
            $gite->setMaxPerson($formData['giteMaxPerson']);
        }
        if (!empty($formData['giteDescription'])) {
            $gite->setDescription($formData['giteDescription']);
        }
    
        $now = new \DateTime();
        $gite->setUpdatedAt($now);
    
        // Enregistrer les modifications dans la base de données
        $entityManager->flush();
    
        return new JsonResponse(['message' => 'Gite modifié avec succès'], Response::HTTP_CREATED);
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
