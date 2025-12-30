# Tính Lương NET 2026

Công cụ tính lương NET từ GROSS theo quy định thuế TNCN Việt Nam 2026.

🔗 **Live Demo:** https://kramerlee.github.io/tinhluong2026/

## ✨ Tính năng

- **Tính lương NET từ GROSS** - Tự động tính các khoản bảo hiểm và thuế TNCN
- **Biểu thuế luỹ tiến 5 bậc (2026)** - Áp dụng mức thuế mới: 5%, 10%, 20%, 30%, 35%
- **Giảm trừ gia cảnh 2026** - Bản thân: 18.000.000đ/tháng, Người phụ thuộc: 8.000.000đ/người/tháng
- **So sánh với mức trước 2026** - Hiển thị chênh lệch khi chuyển đổi chính sách
- **Mobile-friendly** - Giao diện responsive, tối ưu cho thiết bị di động
- **SEO optimized** - Hỗ trợ SSG (Static Site Generation)

## 🧮 Công thức tính

### Bảo hiểm bắt buộc (trên lương GROSS)
| Loại | Tỷ lệ | Mức trần |
|------|-------|----------|
| BHXH | 8% | 46.800.000đ |
| BHYT | 1.5% | 46.800.000đ |
| BHTN | 1% | 46.800.000đ |

### Biểu thuế luỹ tiến 5 bậc (từ 01/01/2026)
| Bậc | Thu nhập tính thuế/tháng | Thuế suất |
|-----|--------------------------|-----------|
| 1 | Đến 10 triệu | 5% |
| 2 | 10 - 20 triệu | 10% |
| 3 | 20 - 40 triệu | 20% |
| 4 | 40 - 80 triệu | 30% |
| 5 | Trên 80 triệu | 35% |

## 🛠️ Tech Stack

- **Framework:** Vue 3 (Composition API)
- **Build Tool:** Vite + vite-ssg
- **State Management:** Pinia
- **UI Library:** PrimeVue
- **Language:** TypeScript
- **Styling:** CSS Variables
- **SEO:** @unhead/vue

## 🚀 Development

```bash
# Install dependencies
yarn install

# Start dev server
yarn dev

# Type check
yarn type-check

# Build for production (SSG)
yarn build

# Preview production build
yarn preview
```

## 📦 Deployment

Ứng dụng được tự động deploy lên GitHub Pages qua GitHub Actions khi push vào branch `main`.

### Renovate Bot
Project sử dụng Renovate để tự động cập nhật dependencies:
- Auto-merge patch/minor updates
- Weekly schedule (cuối tuần)
- Grouped updates cho Vue, PrimeVue, Vite, TypeScript

## 📄 License

MIT
