<?php

namespace App\Controller;

use App\Repository\GiteRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class GiteController extends AbstractController
{
    #[Route('/gite', name: 'app_gite')]
    public function index(Request $request, GiteRepository $giteRepository): Response
    {

        $gites = $giteRepository -> findAll();
        // dd($gites);

        return $this->render('gite/gite.html.twig', [
            'gites' => $gites
        ]);
    }
}
