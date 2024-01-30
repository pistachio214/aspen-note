use tauri::{utils::assets::EmbeddedAssets};

// 创建并返回 Tauri 上下文信息
pub fn create_tauri_context() -> tauri::Context<EmbeddedAssets> {
    tauri::generate_context!()
}
