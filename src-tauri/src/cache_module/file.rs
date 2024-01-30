use crate::app_module::app::create_tauri_context;
use std::path::PathBuf;
use std::{fs};
use tauri::{api::path, Config};

// 公共方法，查看指定文件是否存在
pub fn set_file(file: &String, content: &str) {
    // 去掉项目名称中的所有空格以作为存储地址
    let dir_path: PathBuf = get_data_path();

    // 当用户数据文件不存在的时候就创建
    if !dir_path.exists() {
        fs::create_dir_all(&dir_path).err();
        println!("Directory created: {}", dir_path.display());
    }

    let file_path = dir_path.join(file);
    if !file_path.exists() {
        let data = content;
        std::fs::write(&file_path, data).unwrap();
    }
}

// 获取应用的data地址
fn get_data_path() -> PathBuf {
    let app = create_tauri_context();
    let app_name = app.config().package.product_name.as_ref().unwrap();

    let config = Config::default();
    let app_dir = path::app_data_dir(&config).unwrap();

    app_dir.join(app_name.replace(" ", "").to_string())
}