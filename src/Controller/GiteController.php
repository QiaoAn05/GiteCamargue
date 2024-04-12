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

    #[Route('api/gites', name: 'api_gites', methods: 'GET')]
    public function show(GiteRepository $giteRepository, SerializerInterface $serializer): Response
    {
        $gites = $giteRepository->findAll();
        
        $data = $serializer->serialize($gites, 'json');
    
        return new JsonResponse($data, Response::HTTP_OK, [], true);
    }

    #[Route('api/newGite', name: 'api_newGite', methods: 'POST')]
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

}
