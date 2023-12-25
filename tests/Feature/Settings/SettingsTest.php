<?php

use App\Models\Region;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use  Inertia\Testing\AssertableInertia;
use Tests\TestCase;

use function PHPUnit\Framework\assertEquals;

class SettingsTest extends TestCase
{

    use RefreshDatabase;

    public function test_settings_page_can_be_rendered(): void
    {
        $user = User::factory()->create();
        $response = $this->actingAs($user)->get('/settings');
        $response->assertInertia(function (AssertableInertia $page) {
            $page->has("regions");
        });
        $response->assertStatus(200);
    }

    public function test_region_can_be_created(): void
    {
        $count = Region::count();
        $user = User::factory()->create();
        $response = $this->actingAs($user)->post('/settings/regions', [
            "name" => "Place 1",
            "description" => "desc"
        ]);

        $response->assertStatus(201);

        $response->assertRedirect("/settings");
        assertEquals($count + 1, Region::count());
    }

    public function test_unauthenticated_user_cannot_create_region(): void
    {
        $count = Region::count();

        $response = $this->post('/settings/regions', [
            "name" => "Place 1",
            "description" => "desc"
        ]);


        $response->assertRedirect("/login");
        assertEquals($count, Region::count());
    }
}
