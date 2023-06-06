# C# .NET 7 Web API Using Entity Framework 7
This is a simple example Web API built using a repository pattern and dependency injection. 

## Getting Started
- Open the solution in Visual Studio
- Modify the connection string in appsettings.json to reflect your database environment
- Run the following commands
  - `dotnet ef update database InitialMigration`
  - `dotnet ef update database SeedPharmacyDbDatabase`
- Build and run the PharamacyAPI project

## Pharmacy API

### Get list of Pharmacies
`Get /api/pharmacy`

### Get a specfic Pharmacy
`Get /api/pharmacy/{id}`

### Update a Pharmacy
`Put /api/pharmacy/{id}`

Request body:
```
{
  "id": 0,
  "name": "string",
  "address": "string",
  "city": "string",
  "state": "st",
  "zipcode": "920251666",
  "filledPrescriptionsMonthToDate": 0,
  "updatedAt": "2023-06-05T12:12:30.539Z"
}
```
