<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class GiteController extends AbstractController
{
    #[Route('/gite', name: 'app_gite')]
    public function index(): Response
    {
        return $this->render('gite/gite.html.twig', [
            'controller_name' => 'GiteController',
        ]);
    }
}