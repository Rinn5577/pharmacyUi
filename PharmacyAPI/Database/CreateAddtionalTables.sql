use pharmacydb;

CREATE TABLE Pharmacy(
   PharmacyId INT NOT NULL,
   NAME NVARCHAR (50) NOT NULL,
   Address NVARCHAR (100) NOT NULL, 
   City NVARCHAR (50) NOT NULL,
   State NVARCHAR (2) NOT NULL,
   Zipcode NVARCHAR (9) NOT NULL, 
   CreatedDate DATETIME2 NOT NULL DEFAULT(GETUTCDATE()),
   UpdatedDate DATE,
   PRIMARY KEY (PharmacyId));

INSERT INTO Pharmacy(PharmacyId, Name, Address, City, State, Zipcode)
VALUES (1, 'Pharmacy 1', '123 Test Street', 'Dallas', 'TX', '75024'),
       (2, 'Pharmacy 2', '234 Test Street', 'Dallas', 'TX', '75024'),
       (3, 'Pharmacy 3', '345 Test Street', 'Dallas', 'TX', '75024'),
       (4, 'Pharmacy 4', '456 Test Street', 'Dallas', 'TX', '75024'),
       (5, 'Pharmacy 5', '567 Test Street', 'Dallas', 'TX', '75024');


CREATE TABLE Pharmacist( 
   PharmacistId INT NOT NULL, 
   FirstName NVARCHAR (20) NOT NULL, 
   LastName NVARCHAR (20) NOT NULL, 
   DateOfBirth DATE NOT NULL,
   Age AS DATEDIFF(YEAR, DateOfBirth, GETDATE()), 
   PrimaryDrugSold NVARCHAR (25) NOT NULL, 
   DateOfHire DATE NOT NULL,
   PharmacyId INT NOT NULL, 
   FOREIGN KEY (PharmacyId) REFERENCES Pharmacy(PharmacyId),     
   PRIMARY KEY (PharmacistId));

INSERT INTO Pharmacist (PharmacistId, FirstName, LastName, DateOfBirth, PrimaryDrugSold, DateOfHire, PharmacyId)
   VALUES (1, 'Marcia', 'Brady', '1956-08-05', 'Drisdol', '2008-3-20', 1),
   (2, 'Carol', 'Brady', '1934-02-14', 'Zestril', '1989-05-13', 1),
   (3, 'Ann', 'Brady', '1926-05-05', 'Synthroid', '1978-11-20', 2),
   (4, 'Peter', 'Brady', '1957-11-07', 'Lipitor', '2010-02-02', 2),
   (5, 'Bobby', 'Brady', '1960-12-19', 'Glucophage', '2005-8-21', 3),
   (6, 'Cindy', 'Brady', '1961-08-14', 'Zocor', '2011-07-12', 3),
   (7, 'Jan', 'Brady', '1958-04-29', 'Prilosec', '2017-06-09', 4),
   (8, 'Mike', 'Brady', '1932-10-19', 'Norvasc', '1999-12-19', 4),
   (9, 'Greg', 'Brady', '1954-09-30', 'Lopressor', '2005-02-28', 5);

CREATE TABLE Warehouse(
   WarehouseId INT NOT NULL, 
   Name NVARCHAR (100) NOT NULL, 
   Address NVARCHAR (100) NOT NULL, 
   City NVARCHAR (50) NOT NULL,
   State NVARCHAR (2) NOT NULL,
   ZIPCODE NVARCHAR (9) NOT NULL,    
   PRIMARY KEY (WarehouseId));

INSERT INTO Warehouse(WarehouseId, Name, Address, City, State, Zipcode)
    VALUES(1, 'Eisai Inc', '600 Las Colinas Blvd E', 'Irving', 'TX', 75039),
    (2, 'Bristol-Myers Squibb', '105 Decker CT', 'Dallas', 'TX', 75024),
    (3, 'Unicon Pharma', '1231 Greenway Dr', 'Irving', 'TX', 75038);

CREATE TABLE Delivery(
   DeliveryId INT NOT NULL, 
   DrugName NVARCHAR (25) NOT NULL,
   UnitCount INT NOT NULL,
   UnitPrice SMALLMONEY NOT NULL,
   TotalPrice AS UnitCount * UnitPrice,
   DeliveryDate DATE NOT NULL,
   PharmacyId INT NOT NULL,
   WarehouseId INT NOT NULL,
   FOREIGN KEY (PharmacyId) REFERENCES Pharmacy(PharmacyId), 
   FOREIGN KEY (WarehouseId) REFERENCES Warehouse(WarehouseId),    
   PRIMARY KEY (DeliveryId));

INSERT INTO Delivery(DeliveryId, DrugName, UnitCount, UnitPrice, DeliveryDate, PharmacyId, WarehouseId)
    VALUES(1, 'Drisdol', 30, '$3.16', '2023-05-16', 1, 2),
    (2, 'Zestril', 10, '$14.10', '2023-05-01', 1, 3),
    (3, 'Ventolin', 1, '$33.10', '2023-06-02', 1, 1),
    (4, 'Lipitor', 50, '$0.43,', '2023-04-30', 1, 2),
    (5, 'Zocor', 30, '$5.76', '2023-05-15', 2, 2),
    (6, 'Prilosec', 15, '$1.42', '2023-05-30', 2, 3),
    (7, 'Synthroid', 90, '$1.69', '2023-04-30', 2, 1),
    (8, 'Norvasc', 30, '$3.58', '2023-05-25', 2, 3),
    (9, 'Lopressor', 100, '$2.75', '2023-06-01', 3, 3),
    (10, 'Glucophage', 30, '$1.67,', '2023-05-16', 3, 1),
    (11, 'Drisdol', 100, '$3.02', '2023-05-10', 3, 1),
    (12, 'Zocor', 30, '$6.12', '2023-05-14', 3, 2),
    (13, 'Prilosec', 15, '$1.48', '2023-05-22', 4, 1),
    (14, 'Lopressor', 60, '$3.24', '2023-05-29', 4, 2),
    (15, 'Glucophage', 30, '$1.67', '2023-05-04', 5, 1),
    (16, 'Norvasc', 30, '$3.58', '2023-06-01', 5, 1),
    (17, 'Omeprazole', 30, '$0.36', '2023-05-06', 5, 3),
    (18, 'Zocor', 30, '$5.77', '2023-04-30', 5, 2),
    (19, 'Synthroid', 90, '$1.55', '2023-06-02', 5, 2),
    (20, 'Glucophage', 30, '$1.68', '2023-05-29', 5, 2);

--Trigger that automatically populates CreatedDate field
GO
CREATE TRIGGER tgr_modstamp
ON Pharmacy
AFTER UPDATE 
AS
  UPDATE Pharmacy
  SET UpdatedDate = GETUTCDATE()
  WHERE PharmacyId IN (SELECT DISTINCT PharmacyId FROM Inserted);
------