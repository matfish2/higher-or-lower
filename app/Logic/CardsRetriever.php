<?php namespace App\Logic;

use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;

class CardsRetriever  
{
    public function __construct(Client $client) {
        $this->client = $client;
    }

    public function get()
    {
        return $this->client->get('https://cards.davidneal.io/api/cards');
    }
}
