export class UpdateTransactionDto {
  name?: string
  description?: string
  amount?: number
  kind?: string
  category?: string
  status?: string
  paidAt?: Date
}