<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ExampleTest extends TestCase
{
    /** @test */
    public function it_returns_an_ok_response_for_the_homepage()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
    
    
}
