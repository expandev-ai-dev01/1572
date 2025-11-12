/**
 * @module CoreTypes
 * @summary Global type definitions for the application
 * @domain core
 * @type type-definitions
 * @category types
 */

export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
