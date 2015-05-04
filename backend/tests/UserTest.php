<?php

class UserTest extends TestCase {

	/**
	 * A basic functional test example.
	 *
	 * @return void
	 */
	public function testLogin()
	{
        $method = 'POST';
        $uri = 'user/login';
        $parameters = array(
            'email'=> 'vishwa3@gmail.com',
            'password'=>'password'
        );

        $response = $this->call($method, $uri, $parameters);

        $this->assertEquals(200, $response->getStatusCode());
	}

}
