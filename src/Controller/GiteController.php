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
    public function show(GiteRepository $giteRepository, SerializerInterface $serializer): Response
    {
        $gites = $giteRepository->findAll();
        
        $data = $serializer->serialize($gites, 'json');
    
        return new JsonResponse($data, Response::HTTP_OK, [], true);
    }

    #[Route('gite/create', name: 'gite_create', methods: 'POST')]
    public function create(Request $request, EntityManagerInterface $entityManager): Response
    {
        $data = json_decode($request->getContent(), true);
        
        $gite = new Gite();
        $gite->setName($data['giteName']);
        $gite->setMaxPerson($data['giteMaxPerson']);
        $gite->setDescription($data['giteDescription']);
        $gite->setImage($data['giteImage']);

        $now = new DateTime();
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
    
        $gite->setName($data['giteName'] ?? $gite->getName());
        $gite->setMaxPerson($data['giteMaxPerson'] ?? $gite->getMaxPerson());
        $gite->setDescription($data['giteDescription'] ?? $gite->getDescription());
        $gite->setImage($data['giteImage'] ?? $gite->getImage());
        
        $entityManager->flush();
  
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
