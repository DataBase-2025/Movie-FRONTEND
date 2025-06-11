export interface ApiResponse<T> {
  success: boolean;
  code: number;
  message: string;
  data: T;
  pagination?: {
    total_pages: number;
    current_page: number;
    total_items: number;
    per_page: number;
  };
}
