/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import HealthCheck from "@ioc:Adonis/Core/HealthCheck";
import Route from "@ioc:Adonis/Core/Route";

Route.get("/health", async ({ response }) => {
  const report = await HealthCheck.getReport();

  return report.healthy ? response.ok(report) : response.badRequest(report);
});

Route.post("/sessions", "SessionsController.store");

Route.post("/users", "UsersController.store");

Route.group(() => {
  Route.post("/indicators", "IndicatorsController.store");

  // Route.post("/indicators", "InterestContentsController.store");
}).middleware("auth"); // Essa deverá ser uma rota administrativa

Route.group(() => {
  Route.get("/balances", "BalancesController.index");
  Route.post("/balances", "BalancesController.store");

  Route.post("/balances/files", "FilesController.store");

  Route.get("/balances/transactions", "TransactionsController.index");
  Route.post(
    "/balances/:balance_id/transactions",
    "TransactionsController.store",
  );
  Route.delete(
    "/balances/:balance_id/transactions/:transaction_id",
    "TransactionsController.destroy",
  );
}).middleware("auth");
