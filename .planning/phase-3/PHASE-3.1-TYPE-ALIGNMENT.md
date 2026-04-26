# Phase 3.1: Form Schema & Type Alignment

**Status**: In Progress
**Priority**: Critical (Production Blocker)

## Objective
Eliminate all remaining TypeScript strict-type errors across the business modules (Finance, Inventory, Purchases, Sales) by unifying React Hook Form interfaces with their respective Zod validation schemas. This ensures complete type safety from UI input down to API payload.

## Scope of Work

### Step 1: Centralize Schema Types (`src/modules/shared/schemas/`)
Instead of duplicating types, we will infer them directly from Zod.
*   **Action**: Export `z.infer<typeof [Schema]>` for all major entities in `finance.schema.ts`, `inventory.schema.ts`, `purchases.schema.ts`, and `sales.schema.ts`.

### Step 2: Refactor Form Components
Remove local `interface` declarations inside the pages and replace them with the unified Zod types. Ensure the `useForm<Type>` and `SubmitHandler<Type>` align perfectly.
**Target Modules**:
1.  **Finance**: `CreditNoteFormPage`, `DebitNoteFormPage`, `ExpenseForm`
2.  **Inventory**: `ProductFormPage`, `StockAdjustmentFormPage`
3.  **Purchases**: `GoodsReceiptFormPage`, `PurchaseBillFormPage`, `PurchaseOrderFormPage`
4.  **Sales**: `DeliveryChallanFormPage`, `EstimateFormPage`, `SalesInvoiceFormPage`, `SalesOrderFormPage`

### Step 3: Resolve RTK Query & Type Mismatches
Fix the remaining structural API type errors.
*   **`financeApi.ts`**: Fix the `ResultDescription` array mapping where `id` is defaulting to `unknown` instead of `string | number`.
*   **`finance.types.ts`**: Fix the missing `AuditLogSchema` export.
*   **`SalesInvoiceFormPage.tsx`**: Fix the undeclared `watchedCustomerId` variable reference.

### Step 4: Final Verification
*   **Action**: Run `npm run type-check`.
*   **Success Criteria**: The TypeScript compiler must return `0 errors` across the entire workspace.
