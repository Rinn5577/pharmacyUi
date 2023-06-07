USE pharmacydb;

-- Report 1 - All delivery records with Warehouse and Pharmacy names instead of IDs
SELECT DrugName, UnitCount, UnitPrice, TotalPrice, DeliveryDate, Pharmacy.Name AS PharmacyName, Warehouse.Name AS WarehouseName
FROM Delivery
INNER JOIN Pharmacy ON Delivery.PharmacyId = Pharmacy.PharmacyId
INNER JOIN Warehouse ON Delivery.WarehouseId = Warehouse.WarehouseId;

--Report 2 - All Warehouses with total revenue, unit count, and average revenue per unit
Select Warehouse.Name AS WarehouseName, 
    SUM(TotalPrice) AS TotalRevenue, 
    SUM(UnitCount) AS TotalUnitCount, 
    (SUM(TotalPrice)/SUM(UnitCount)) AS AvgRevenuePerUnit
FROM Delivery
INNER JOIN Warehouse ON Delivery.WarehouseId = Warehouse.WarehouseId
GROUP BY Warehouse.Name
ORDER BY TotalRevenue DESC;

--Report 3 All pharmacists with total unit count of their primary drug vs non primary drug sold at their Pharmacy
SELECT CONCAT(FirstName, ' ', LastName) AS Name, Pharmacy.Name AS PharmacyName, PrimaryDrugSold, 
    (SELECT ISNULL(SUM(UnitCount), 0) 
    FROM Delivery 
    WHERE Delivery.DrugName = Pharmacist.PrimaryDrugSold 
    AND Delivery.PharmacyId = Pharmacist.PharmacyId) AS PrimaryUnitCount,
    (SELECT ISNULL(SUM(UnitCount), 0) 
    FROM Delivery 
    WHERE Delivery.DrugName != Pharmacist.PrimaryDrugSold 
    AND Delivery.PharmacyId = Pharmacist.PharmacyId) AS NonPrimaryUnitCount
FROM Pharmacist
INNER JOIN Pharmacy ON Pharmacist.PharmacyId = Pharmacy.PharmacyId
ORDER BY Name;

-- Report 4 Count of filled prescriptions month-to-date (starting 6/1), by pharmacy
SELECT COUNT(Delivery.PharmacyId) AS FilledPrescriptionsMTD, Pharmacy.Name AS PharmacyName
FROM Delivery
INNER JOIN Pharmacy ON Delivery.PharmacyId = Pharmacy.PharmacyId
AND Delivery.DeliveryDate > '2023-05-31'
GROUP BY Pharmacy.Name; 