# SQL Reporting Exercise
There are two files in the Database folder:
- CreateAdditionalTables.sql - This creates tables for `Pharmacy`, `Pharmacist`, `Warehouse`, and `Delivery` and then seed each one with test data
- ExerciseReports.sql - The queries in this file create 3 reports based on the exercise
  - Report 1 - All delivery records with Warehouse and Pharmacy names instead of IDs
  - Report 2 - All Warehouses with total revenue, unit count, and average revenue per unit
  - Report 3 - All pharmacists with total unit count of their primary drug vs non primary drug sold at their Pharmacy
  - (BONUS) Report 4 - Count of filled prescriptions month-to-date (starting 6/1), by pharmacy

## A note on the differences in the Pharmacy table
In the first exercise, a table called `Pharmacies `was created with a `FilledPrescriptionsMonthToDate` field as per Exercie 1 requirements. This second exercise creates and uses the `Pharmacy` table instead, and removes the `FilledPrescriptionMonthToDate` field. Removing this field was more appropriate for Exercise 2 because that particular field can be computed based on data from other tables as seen in Report 4.
