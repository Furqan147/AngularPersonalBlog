---
title: 'Asp .Net Core Minimal Apis'
description: 'blog description'
published: true
slugs:
    - ___UNPUBLISHED___l83jf39i_ahzGIJmUYqYpETYF72XMvalo7ZNxtYZC
---
<h1>Asp .Net Core Minimal Api</h1>
<h2>Introduction</h2>
 This article shows how to create an asp .net core minimal api using .Net 6 and Visual Studio 2022. This article starts with introduction of the minimal apis, after that it demonstrates how to add model and http action methods to get and post data to api. In the end the article discusses the differences between minimal api and traditional web api.
<h2>Creating the project</h2>
I will be using visual studio 2022 for this article but you can use VS 2019 with .Net 6 SDK installed. If you are using VS 2022 you can follow this article without any problem. With that being said follow following steps to create a new web api project:-

Open visual studio 2022.
Click on "Create a New Project".
Select "Asp .Net Core Web Api" template from the list and click Next.
Name your project what ever you want, i will name this project as "MoviesMinimalApi". Click Next.
This tutorial is for minimal apis. we will not be discussing anything else like Https or OpenApi support. So uncheck "Configure for HTTPS" and "Enable OpenApi Support".
Also uncheck "Use Controllers (uncheck to use minimal APIs)". Because we want to work with minimal apis.
Click "Create".

Proejct will be created with a basic minimal api. Open file Program.cs. You will find the same code as in Listing 1:=

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

var app = builder.Build();

// Configure the HTTP request pipeline.

var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

app.MapGet("/weatherforecast", () =>
{
    var forecast = Enumerable.Range(1, 5).Select(index =>
       new WeatherForecast
       (
           DateTime.Now.AddDays(index),
           Random.Shared.Next(-20, 55),
           summaries[Random.Shared.Next(summaries.Length)]
       ))
        .ToArray();
    return forecast;
});

app.Run();

internal record WeatherForecast(DateTime Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
<h5>Listing 1</h5>
Remove all the code from file Program.cs file and replace it with following code:-
var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

app.MapGet("/helloworld", () =>
{
    return "Hello world...";
});

app.Run();

Build and run the project and in browser url change "weatherforecast" to "helloworld". you will see "Hello World..." printed on screen. So far so good.
Adding the model
Now we will add a sample model so that we can get, post, update or delete data. In the Program.cs file under app.,Run() add following code:-
public class Movie
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? Genre { get; set; }
    public decimal Price { get; set; }
}
<h5>Listing 2</h5>
Adding Sample Movie Data
Just under var app = builder.Build(); add following code:- 
var movies = new List<Movie>();
movies.Add(new Movie { Id = 1, Name = "The godfather", Genre = "Crime", Price = 25 });
movies.Add(new Movie { Id = 2, Name = "The fault in our stars", Genre = "Romance", Price = 20 });
movies.Add(new Movie { Id = 3, Name = "Battleship", Genre = "Action", Price = 15 });
movies.Add(new Movie { Id = 4, Name = "Due date", Genre = "Drama", Price = 30 });
movies.Add(new Movie { Id = 5, Name = "The big short", Genre = "Documentary", Price = 40 });
The code for the http action methods for get, post, put and delete is given below:- 
app.MapGet("/getallmovies", () =>
{
    return movies;
});

app.MapPost("", (Movie movie) =>
 {
     movies.Add(movie);

     return movies;
 });

app.MapPut("", (Movie movie) =>
{
    var index = movies.FindIndex(m => m.Id == movie.Id);

    movies[index] = movie;

    return movies;
});

app.MapDelete("/{id}", (int id) =>
{
    var index = movies.FindIndex(m => m.Id == id);

    movies[index] = null;

    return movies;
});
Now, open postman and test the apis. You can post and update movies using body of postman. for deleting the movie you can send id as part of route like "localhost:Your_Port/{id}". The Program.cs file as a whole should look like this:-
var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

var movies = new List<Movie>();

movies.Add(new Movie { Id = 1, Name = "The godfather", Genre = "Crime", Price = 25 });
movies.Add(new Movie { Id = 2, Name = "The fault in our stars", Genre = "Romance", Price = 20 });
movies.Add(new Movie { Id = 3, Name = "Battleship", Genre = "Action", Price = 15 });
movies.Add(new Movie { Id = 4, Name = "Due date", Genre = "Drama", Price = 30 });
movies.Add(new Movie { Id = 5, Name = "The big short", Genre = "Documentary", Price = 40 });

app.MapGet("/helloworld", () =>
{
    return "Hello world...";
});

app.MapGet("/getallmovies", () =>
{
    return movies;
});

app.MapPost("", (Movie movie) =>
 {
     movies.Add(movie);

     return movies;
 });

app.MapPut("", (Movie movie) =>
{
    var index = movies.FindIndex(m => m.Id == movie.Id);

    movies[index] = movie;

    return movies;
});

app.MapDelete("/{id}", (int id) =>
{
    var index = movies.FindIndex(m => m.Id == id);

    movies[index] = null;

    return movies;
});

app.Run();


public class Movie
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? Genre { get; set; }
    public decimal Price { get; set; }
}
<h5>Listing 3</h5>
Summary
In this article, I discussed how to create a simple minimal api. Microsoft has introduced minimal apis in .Net 6. They are extremely useful for creating microservices. You can create a microservice very fast with very few lines of code and deploy it. that said thier are also several limitations to using minimal apis. for example you cant upload files using minimal apis for that you still have to use traditional web apis. You can't also use advance model binding like you can use in Asp .Net Core Web Api or MVC or Razor Pages. With that being said for limited use Minimal apis are best to use. Microsoft has also promised to increase functionality of minimal apis in the future. 
# Asp .Net Core Minimal Apis
