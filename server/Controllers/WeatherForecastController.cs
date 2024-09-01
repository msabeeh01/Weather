using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController: ControllerBase {
    private readonly WeatherService _weatherService;

    // 
    public WeatherForecastController(WeatherService weatherService) {
        _weatherService = weatherService;
    }

    [HttpGet]
    public IEnumerable<WeatherForecast> Get() {
        return _weatherService.GetWeatherForecasts();
    }
}