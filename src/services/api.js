import axios from 'axios'

const DEFAULT_TIMEOUT_MS = 10000

const STATUS_MESSAGES = {
  400: 'Permintaan tidak valid.',
  404: 'Data tidak ditemukan.',
  429: 'Terlalu banyak permintaan ke server. Silakan tunggu sebentar.',
}

/**
 * Menormalisasi error dari Axios menjadi Error dengan pesan yang mudah dibaca.
 * @param {unknown} error
 * @returns {Error & { status?: number, code?: string, originalError?: unknown }}
 */
export function normalizeApiError(error) {
  let message = 'Terjadi kesalahan saat memproses permintaan.'
  let status
  let code

  if (axios.isAxiosError(error)) {
    code = error.code
    status = error.response?.status

    if (error.code === 'ECONNABORTED') {
      message = 'Koneksi ke server melebihi batas waktu. Silakan coba lagi.'
    } else if (!error.response) {
      message = 'Tidak dapat terhubung ke server. Periksa koneksi internet atau konfigurasi API.'
    } else if (status && STATUS_MESSAGES[status]) {
      message = STATUS_MESSAGES[status]
    } else if (status && status >= 500) {
      message = 'Terjadi kesalahan pada server. Silakan coba lagi nanti.'
    } else if (typeof error.response.data?.message === 'string' && error.response.data.message.trim()) {
      message = error.response.data.message.trim()
    } else if (error.message) {
      message = error.message
    }
  } else if (error instanceof Error && error.message) {
    message = error.message
  }

  const normalized = new Error(message)
  if (status !== undefined) normalized.status = status
  if (code !== undefined) normalized.code = code
  normalized.originalError = error
  return normalized
}

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '',
  timeout: DEFAULT_TIMEOUT_MS,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(normalizeApiError(error))
)

export { api }
export default api
