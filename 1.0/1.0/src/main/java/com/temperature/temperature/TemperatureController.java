package com.temperature.temperature;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@RestController
public class TemperatureController {
    @Value("${myapp.API_KEY}")
    private String Api_Key;


    @GetMapping("/cities")
    public List<String> cities() {
        List<String> cities = new ArrayList<>();
        cities.add("Yaounde");
        cities.add("Douala");
        cities.add("Buea");
        cities.add("Dschang");
        return cities;
    }
    @PostMapping("/meteo")
    public ResponseEntity<String> meteo (@RequestParam String ville ) {
        // Créer une instance de RestTemplate
        RestTemplate restTemplate = new RestTemplate();
        String meteoApiUrl ="https://api.weatherapi.com/v1/current.json?key="+Api_Key+"&q="+ville+"&aqi=no" ;
        // Faire un appel à l'API météo
        String apiUrl = meteoApiUrl; // Exemple : "https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=YOUR_API_KEY"
        ResponseEntity<String> response = restTemplate.getForEntity(apiUrl, String.class);

        // Extraire l'attribut souhaité de la réponse (par exemple, la température)

        // Retourner la valeur de l'attribut comme réponse au frontend
        return response;
    }
}
