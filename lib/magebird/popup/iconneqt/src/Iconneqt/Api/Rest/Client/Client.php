<?php

namespace Iconneqt\Api\Rest\Client;

/*
The MIT License (MIT)

Copyright (c) 2016, Advanced CRMMail Technology B.V., Netherlands

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

class Client
{

	const GET = 'GET';
	const POST = 'POST';
	const PATCH = 'PATCH';
	const PUT = 'PUT';
	const DELETE = 'DELETE';

	private $url;
	private $username;
	private $token;

	public function __construct($url, $username, $token)
	{
		$this->url = $url;
		$this->username = $username;
		$this->token = $token;
	}

	/**
	 * Perform an API call
	 * @param string $method one of the predefined constants
	 * @param string $path the API endpoint to use, minus slashes
	 * @param array|null $post_data map of post data
	 * @param boolean $associative_return set to true to return an associative array, otherwise an object will be returned.
	 * @return mixed
	 * @throws Exception
	 * @throws StatusCodeException
	 */
	public function call($method, $path, $post_data = null, $associative_return = false)
	{
		$ch = curl_init();

		curl_setopt_array($ch, array(
			CURLOPT_CUSTOMREQUEST => strtoupper($method),
			CURLOPT_URL => $this->url . '/api/v1/' . trim($path, '/'),
			CURLOPT_USERPWD => $this->username . ':' . $this->token,
			CURLOPT_SSL_VERIFYPEER => false,
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_HEADER => true,
		));  

		if ($post_data) {
			if (is_array($post_data) || is_object($post_data)) {
				curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post_data));
			} else {
				curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
				curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($post_data, JSON_NUMERIC_CHECK));
			}
		}

		if (($result = curl_exec($ch)) === false) {
      //throw new \Exception(curl_error($ch), curl_errno($ch));
		};

		list($headers, $body) = explode("\r\n\r\n", $result);

		$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
		if ($httpcode >= 400) {
			preg_match('~HTTP/\S+ ([0-9]{3}) (.+)~m', $headers, $status);
			//throw new StatusCodeException($status[2], $httpcode);
		}

		curl_close($ch);

		return json_decode($body, $associative_return);
	}

	/**
	 * Perform a GET, return $default if 404 is returned.
	 * @param string $path
	 * @param mixed $default
	 * @param boolean $associative_return
	 * @return mixwed
	 */
	public function get($path, $default = null, $associative_return = false)
	{
		try {
			return $this->call(self::GET, $path, null, $associative_return);
		} catch (Exception $e) {
			if ($e->getCode() !== 404) {
				throw $e;
			}
		}

		return $default;
	}

	/**
	 * Perform a DELETE, return $default if 404 is returned.
	 * @param string $path
	 * @param mixed $default
	 * @param boolean $associative_return
	 * @return mixwed
	 */
	public function delete($path, $default = null, $associative_return = false)
	{
		try {
			return $this->call(self::DELETE, $path, null, $associative_return);
		} catch (Exception $e) {
			if ($e->getCode() !== 404) {
				throw $e;
			}
		}

		return $default;
	}

	/**
	 * Perform a PATCH, return $default if 404 is returned.
	 * @param string $path
	 * @param array $data
	 * @param mixed $default
	 * @param boolean $associative_return
	 * @return mixwed
	 */
	public function patch($path, $data = null, $default = null, $associative_return = false)
	{
		try {
			return $this->call(self::PATCH, $path, $data, $associative_return);
		} catch (Exception $e) {
			if ($e->getCode() !== 404) {
				throw $e;
			}
		}

		return $default;
	}

	/**
	 * Perform a PUT, return $default if 404 is returned.
	 * @param string $path
	 * @param array $data
	 * @param mixed $default
	 * @param boolean $associative_return
	 * @return mixwed
	 */
	public function put($path, $data = null, $default = null, $associative_return = false)
	{
		try {
			return $this->call(self::PUT, $path, $data, $associative_return);
		} catch (Exception $e) {
			if ($e->getCode() !== 404) {
				throw $e;
			}
		}

		return $default;
	}

	/**
	 * Perform a POST, return $default if 404 is returned.
	 * @param string $path
	 * @param array $data
	 * @param mixed $default
	 * @param boolean $associative_return
	 * @return mixwed
	 */
	public function post($path, $data = null, $default = null, $associative_return = false)
	{
		try {
			return $this->call(self::POST, $path, $data, $associative_return);
		} catch (Exception $e) {
			if ($e->getCode() !== 404) {
				throw $e;
			}
		}

		return $default;
	}

}
