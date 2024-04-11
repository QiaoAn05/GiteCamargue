<?php

namespace App\Controller;

use App\Repository\GiteRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
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


}
