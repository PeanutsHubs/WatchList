const ALL_GENRES = [
  "Drama", "Action", "Comedy", "Romance", "Thriller", "Horror", "Mystery",
  "Fantasy", "Sci-Fi", "Adventure", "Animation", "Family", "Historical",
  "Crime", "Slice of Life", "Documentary", "Musical", "Psychological",
  "School", "Sports", "Suspense", "Melodrama", "Supernatural", "Coming of Age",
  "War", "Biography", "Other"
];

const MEDIA_TYPES = [
  "K-Drama", "J-Drama", "C-Drama", "Anime", "Movie", "Asian", "TV Series",
  "Western Series", "Documentary", "Short Film", "Other"
];

const PLATFORMS = [
  "Netflix", "Viu", "Disney+", "BiliBili", "Movie Box", "HBO Max", "Prime Video",
  "Apple TV+", "Crunchyroll", "YouTube", "Paramount+", "Hulu", "Other"
];

const THEME_PRESETS = [
  { id: 'professional', name: 'Professional Polish (Executive Slate & Blue)', bg: '#0F172A', text: '#3B82F6' },
  { id: 'chocolate', name: 'Chocolate Classic', bg: '#241914', text: '#F4E5D0' },
  { id: 'espresso', name: 'Espresso', bg: '#1D1614', text: '#F7EBE1' },
  { id: 'cocoa', name: 'Cocoa', bg: '#2C1D1D', text: '#FADEDE' },
  { id: 'khaki', name: 'Khaki', bg: '#22261E', text: '#EBEFE3' },
  { id: 'cream', name: 'Cream Warmth', bg: '#3D322B', text: '#FFF5EA' },
];

const LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'fil', name: 'Filipino', nativeName: 'Tagalog' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語' },
  { code: 'ko', name: 'Korean', nativeName: '한국어' },
  { code: 'zh-CN', name: 'Chinese (Simplified)', nativeName: '简体中文' },
  { code: 'zh-TW', name: 'Chinese (Traditional)', nativeName: '繁體中文' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia' },
  { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu' },
  { code: 'th', name: 'Thai', nativeName: 'ไทย' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski' },
];

const TRANSLATIONS = {
  en: {
    home: "Home", profile: "Profile", settings: "Settings",
    app_title: "WATCHLIST", app_subtitle: "Stories I've watched.",
    search_placeholder: "Search titles, genres, platforms...",
    all: "ALL", genres: "Genres", platform: "Platform", media_type: "Media Type",
    favorites: "Favorites", sort_by: "Sort By", newest: "Newest Watched",
    oldest: "Oldest Watched", highest_rated: "Highest Rated", lowest_rated: "Lowest Rated",
    a_z: "A-Z", z_a: "Z-A", no_stories_found: "No stories found.",
    no_stories_sub: "Try adjusting your search terms or filters.",
    empty_archive: "Your cinematic archive is empty.",
    view_details: "View Full Details", add_watched: "Add Watched",
    edit_watched: "Edit Story", delete_watched: "Delete Story",
    delete_confirm_title: "Delete this story?", delete_confirm_sub: "This action cannot be undone.",
    delete: "Delete", cancel: "Cancel", save: "Save Changes",
    add_to_watched: "ADD TO WATCHED", title: "Title", original_title: "Original Title",
    rating: "Rating", watched_date: "Watched Date", description: "Description",
    featured_hero: "Mark as Featured Hero", favorite_story: "Favorite Story",
    image_preview: "Image Preview", posts: "Posts", watched: "Watched",
    no_posts_yet: "No memories posted yet.", add_post: "Add Post",
    caption: "Caption", edit_profile: "Edit Profile", display_name: "Display Name",
    username: "Username", bio: "Bio", profile_image: "Profile Image",
    banner_image: "Banner Image", appearance: "APPEARANCE",
    dark_mode: "Dark Mode", light_mode: "Light Mode", theme_customize: "Theme Customize",
    language: "LANGUAGE", owner_mode: "OWNER MODE",
    owner_code_placeholder: "Enter owner code", unlock: "Unlock",
    owner_active: "Owner Mode Active", incorrect_code: "Incorrect owner code.",
    about: "ABOUT",
    about_text: "ᴀ ᴄᴜʀᴀᴛᴇᴅ ᴡᴏʀʟᴅ ᴏꜰ ᴍᴏᴠɪᴇꜱ, ᴅʀᴀᴍᴀꜱ, ᴀɴᴅ ᴀɴɪᴍᴇ — ᴡʜᴇʀᴇ ᴜɴꜰᴏʀɢᴇᴛᴛᴀʙʟᴇ ꜱᴛᴏʀɪᴇꜱ ʟɪᴠᴇ ᴏɴ.",
    status_watched: "WATCHED",
  },
  fil: {
    home: "Tahanan", profile: "Propyul", settings: "Mga Setting",
    app_title: "WATCHLIST", app_subtitle: "Mga kuwentong aking napanood.",
    search_placeholder: "Maghanap ng pamagat, genre, platform...",
    all: "LAHAT", genres: "Mga Genre", platform: "Platform", media_type: "Uri ng Media",
    favorites: "Mga Paborito", sort_by: "I-sort Ayon sa",
    newest: "Pinakabagong Napanood", oldest: "Pinakalumang Napanood",
    highest_rated: "Pinakamataas na Rating", lowest_rated: "Pinakamababang Rating",
    a_z: "A-Z", z_a: "Z-A", no_stories_found: "Walang nahanap na kuwento.",
    empty_archive: "Bakante ang iyong sinematikong arkibo.",
    view_details: "Tingnan ang Buong Detalye", add_watched: "Magdagdag ng Napanood",
    edit_watched: "I-edit ang Kuwento", delete_watched: "Burahin ang Kuwento",
    delete_confirm_title: "Burahin ang kuwentong ito?", delete_confirm_sub: "Hindi na ito mababawi.",
    delete: "Burahin", cancel: "Kanselahin", save: "I-save ang Pagbabago",
    status_watched: "NAPANOOD",
    owner_mode: "MODO NG MAY-ARI",
    owner_code_placeholder: "Ilagay ang code ng may-ari", unlock: "I-unlock",
    owner_active: "Aktibo ang Modo ng May-ari", incorrect_code: "Maling code ng may-ari.",
  },
  ja: {
    home: "ホーム", profile: "プロフィール", settings: "設定",
    app_title: "WATCHLIST", app_subtitle: "鑑賞した物語の記録。",
    search_placeholder: "タイトル、ジャンル、配信サービスを検索...",
    all: "すべて", genres: "ジャンル", platform: "配信プラットフォーム", media_type: "メディア形式",
    favorites: "お気に入り", sort_by: "並び替え", newest: "視聴日が新しい順",
    oldest: "視聴日が古い順", highest_rated: "評価が高い順", lowest_rated: "評価が低い順",
    a_z: "五十音順 (A-Z)", z_a: "逆順 (Z-A)", no_stories_found: "作品が見つかりませんでした。",
    empty_archive: "アーカイブに作品がありません。", view_details: "詳細を見る",
    add_watched: "鑑賞記録を追加", edit_watched: "作品を編集", delete_watched: "作品を削除",
    delete_confirm_title: "この作品を削除しますか？", delete_confirm_sub: "この操作は取り消せません。",
    delete: "削除", cancel: "キャンセル", save: "変更を保存",
    status_watched: "鑑賞済み",
    owner_mode: "オーナーモード",
    owner_code_placeholder: "オーナーコードを入力", unlock: "ロック解除",
    owner_active: "オーナーモード有効", incorrect_code: "無効なオーナーコードです。",
  },
  ko: {
    home: "홈", profile: "프로필", settings: "설정",
    app_title: "WATCHLIST", app_subtitle: "내가 관람한 작품들의 아카이브.",
    search_placeholder: "제목, 장르, 플랫폼 검색...",
    all: "전체", genres: "장르", platform: "플랫폼", media_type: "미디어 유형",
    favorites: "즐겨찾기", sort_by: "정렬 기준", newest: "최신 관람순",
    oldest: "오래된 관람순", highest_rated: "최고 평점순", lowest_rated: "최저 평점순",
    no_stories_found: "작품을 찾을 수 없습니다.", view_details: "상세 보기",
    add_watched: "기록 추가", status_watched: "시청 완료",
    owner_mode: "소유자 모드", owner_code_placeholder: "소유자 코드 입력",
    unlock: "잠금 해제", owner_active: "소유자 모드 활성화됨",
    incorrect_code: "올바르지 않은 소유자 코드입니다.",
  },
  "zh-CN": {
    home: "首页", profile: "个人主页", settings: "设置",
    app_title: "WATCHLIST", app_subtitle: "我所看过的光影故事。",
    search_placeholder: "搜索片名、类型、平台...",
    all: "全部", genres: "类型", platform: "播放平台", media_type: "媒介分类",
    favorites: "收藏夹", sort_by: "排序", newest: "最近观看", oldest: "最早观看",
    highest_rated: "最高评分", lowest_rated: "最低评分",
    no_stories_found: "未找到相关作品。", view_details: "查看详情",
    add_watched: "添加观影记录", status_watched: "已观看",
    owner_mode: "馆长/站长模式", owner_code_placeholder: "输入解锁代码",
    unlock: "解锁", owner_active: "站长模式已激活", incorrect_code: "解锁代码错误。",
  }
};

const DEFAULT_USER_PROFILE = {
  displayName: "Peanut",
  username: "@Cy_Peanut",
  bio: "Cinéphile, Drama Enthusiast & Anime Collector.\nCurator of epic stories and timeless cinema.",
  profileImage: "https://res.cloudinary.com/dowvrwa8c/image/upload/v1775625250/1754864214_ujsxz6.jpg",
  bannerImage: "https://res.cloudinary.com/dowvrwa8c/image/upload/v1774213261/IMG_0005_oyxv1o.jpg"
};

const ICONS = {
  film: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M5 3v18l15-9L5 3z"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
  sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3L12 3z"/></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  tv: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>',
  clapperboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"/><path d="m6.2 5.3 3.1 3.9"/><path d="m12.4 3.4 3.1 4"/><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/></svg>',
  upload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  checkCircle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  alertCircle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
  chevronLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',
  chevronRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',
  image: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
  palette: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
  loader: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>',
};

let state = {
  activeTab: 'home',
  watchedItems: [],
  posts: [],
  profile: { ...DEFAULT_USER_PROFILE },
  isLoading: true,
  settings: loadSettings(),
  searchQuery: '',
  selectedGenre: 'ALL',
  selectedPlatform: 'ALL',
  selectedMediaType: 'ALL',
  showFavoritesOnly: false,
  sortBy: 'newest',
  selectedWatched: null,
  selectedPost: null,
  selectedTrailer: null,
  viewImageUrl: null,
  isAddEditWatchedOpen: false,
  editingWatchedItem: null,
  isAddPostOpen: false,
  isEditProfileOpen: false,
  deleteTarget: null,
  toasts: [],
  postPreviewScale: 1,
  pendingUploads: {},
  isFirestoreEnabled: false,
  firebaseUser: null,
  isOwner: false,
};

function loadSettings() {
  const saved = localStorage.getItem('peanut_settings');
  if (saved) {
    try { return JSON.parse(saved); } catch (e) { }
  }
  return {
    theme: 'chocolate',
    colorMode: 'dark',
    language: 'en'
  };
}

function saveSettings() {
  localStorage.setItem('peanut_settings', JSON.stringify(state.settings));
}

function getTranslation(lang, key) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
  if (dict && dict[key]) return dict[key];
  return TRANSLATIONS.en[key] || key;
}

function getEmbedUrl(url) {
  if (!url) return '';

  let normalizedUrl = url.trim();
  if (!normalizedUrl.match(/^https?:\/\//i)) {
    normalizedUrl = `https://${normalizedUrl}`;
  }

  try {
    const parsed = new URL(normalizedUrl);
    const host = parsed.hostname.toLowerCase();
    const params = parsed.searchParams;
    const startValue = params.get('t') || params.get('start');
    const startParam = startValue ? `&start=${startValue.replace(/[^0-9]/g, '') || startValue}` : '';

    if (host.includes('youtu.be')) {
      const videoId = parsed.pathname.slice(1);
      if (!videoId) return normalizedUrl;
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1${startParam}`;
    }

    if (host.includes('youtube.com')) {
      const path = parsed.pathname;
      let videoId = '';

      if (path.startsWith('/watch')) {
        videoId = params.get('v') || '';
      } else if (path.startsWith('/embed/')) {
        videoId = path.split('/').pop();
      } else if (path.startsWith('/shorts/')) {
        videoId = path.split('/').pop();
      }

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1${startParam}`;
      }
    }

    return normalizedUrl;
  } catch (e) {
    return url;
  }
}

function showToast(text, type = 'info') {
  const id = Date.now().toString();
  state.toasts.push({ id, text, type });
  renderToasts();
  setTimeout(() => {
    state.toasts = state.toasts.filter(t => t.id !== id);
    renderToasts();
  }, 4000);
}

async function setupFirestoreSync() {
  if (!window.__FIREBASE) throw new Error('Firebase not available');
  const FB = window.__FIREBASE;

  FB.onCollectionSnapshot('watchlist', (items) => {
    state.watchedItems = items.map(i => ({
      ...i,
      genres: i.genres || [],
      rating: typeof i.rating === 'number' ? i.rating : (i.rating ? parseFloat(i.rating) : 0)
    }));
    render();
  });

  FB.onCollectionSnapshot('posts', (items) => {
    state.posts = items.map(p => ({ ...p }));
    render();
  });

  FB.onDocSnapshot('profile', 'main', (doc) => {
    if (doc) {
      state.profile = { ...DEFAULT_USER_PROFILE, ...doc };
      render();
    }
  });

  state.isFirestoreEnabled = true;

  if (FB && typeof FB.onAuthStateChanged === 'function') {
    FB.onAuthStateChanged((user) => {
      state.firebaseUser = user;
      state.isOwner = !!user;
      if (state._suppressNextAuthToast) {
        state._suppressNextAuthToast = false;
      } else {
        if (user) {
          showToast(`Signed in as ${user.email || user.displayName || 'Owner'}`, 'success');
        } else {
          showToast('Signed out', 'info');
        }
      }
      render();
    });
  }
}

function dismissToast(id) {
  state.toasts = state.toasts.filter(t => t.id !== id);
  renderToasts();
}

function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function resetPreviewTransform(container, img) {
  if (container) {
    container.style.cursor = 'grab';
    container.style.transform = '';
  }
  if (img) {
    img.style.transform = '';
    img.style.left = '0px';
    img.style.top = '0px';
  }
  state.postPreviewScale = 1;
}

function getHeroItem() {
  const featured = state.watchedItems.find(w => w.featured);
  if (featured) return featured;
  return state.watchedItems[0] || null;
}

function getFilteredWatchedItems() {
  let result = [...state.watchedItems];

  if (state.searchQuery.trim()) {
    const q = state.searchQuery.toLowerCase().trim();
    result = result.filter(item =>
      item.title.toLowerCase().includes(q) ||
      (item.originalTitle && item.originalTitle.toLowerCase().includes(q)) ||
      item.genres.some(g => g.toLowerCase().includes(q)) ||
      item.platform.toLowerCase().includes(q) ||
      item.mediaType.toLowerCase().includes(q)
    );
  }

  if (state.selectedGenre !== 'ALL') {
    result = result.filter(item => item.genres.includes(state.selectedGenre));
  }

  if (state.selectedPlatform !== 'ALL') {
    result = result.filter(item => item.platform === state.selectedPlatform);
  }

  if (state.selectedMediaType !== 'ALL') {
    result = result.filter(item => item.mediaType === state.selectedMediaType);
  }

  if (state.showFavoritesOnly) {
    result = result.filter(item => item.isFavorite);
  }

  result.sort((a, b) => {
    if (state.sortBy === 'newest') return new Date(b.watchedDate) - new Date(a.watchedDate);
    if (state.sortBy === 'oldest') return new Date(a.watchedDate) - new Date(b.watchedDate);
    if (state.sortBy === 'highest_rated') return b.rating - a.rating;
    if (state.sortBy === 'lowest_rated') return a.rating - b.rating;
    if (state.sortBy === 'a_z') return a.title.localeCompare(b.title);
    if (state.sortBy === 'z_a') return b.title.localeCompare(a.title);
    return 0;
  });

  return result;
}

function handleToggleFavorite(item, e) {
  if (e) e.stopPropagation();
  const newFav = !item.isFavorite;

  if (!state.isFirestoreEnabled || !window.__FIREBASE) {
    showToast('Firestore is not available. Cannot update favorite status.', 'error');
    return;
  }
  if (!state.firebaseUser) {
    showToast('Please sign in as the Owner to update favorites.', 'error');
    return;
  }

  window.__FIREBASE.setDocById('watchlist', item.id, { isFavorite: newFav, lastModifiedBy: state.firebaseUser.uid })
    .then(() => {
      showToast(newFav ? 'Added to Favorites!' : 'Removed from Favorites', 'success');
      showToast('Saved to Firestore: watchlist', 'success');
    })
    .catch((err) => {
      console.error('Failed to update favorite in Firestore:', err);
      showToast('Firestore error: ' + (err && err.message ? err.message : String(err)), 'error');
    });
}

async function handleSaveWatched(payload, existingId) {
  const resetWatchedSubmitBtn = () => {
    const submitBtn = document.getElementById('watchedSubmitBtn');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<span>${state.editingWatchedItem ? 'Save Changes' : 'Add to Watched'}</span>`;
    }
  };

  if (!state.isFirestoreEnabled || !window.__FIREBASE) {
    showToast('Firestore is not available. Cannot save item.', 'error');
    resetWatchedSubmitBtn();
    return;
  }

  const FB = window.__FIREBASE;

  if (!state.firebaseUser) {
    showToast('Please sign in as the Owner to create or edit items.', 'error');
    resetWatchedSubmitBtn();
    return;
  }

  if (payload.featured) {
    const currentlyFeatured = state.watchedItems.filter(w => w.featured && w.id !== existingId);
    for (const w of currentlyFeatured) {
      try {
        await FB.setDocById('watchlist', w.id, { featured: false, lastModifiedBy: state.firebaseUser.uid });
      } catch (err) {
        console.error('Failed to un-feature previous item:', err);
        showToast('Firestore error: ' + (err && err.message ? err.message : String(err)), 'error');
      }
    }
  }

  try {
    if (existingId) {
      if (state.pendingUploads.watchedImage) {
        const file = state.pendingUploads.watchedImage;
        showToast('Uploading poster...', 'info');
        const url = await FB.uploadImage(file, `watchlist/${existingId}/poster.jpg`, pct => {
        });
        payload.imageUrl = url;
      }
      await FB.setDocById('watchlist', existingId, { ...payload, lastModifiedBy: state.firebaseUser.uid });
      showToast('Watched story updated!', 'success');
      showToast('Saved to Firestore: watchlist', 'success');
    } else {
      const newId = await FB.createDoc('watchlist', { ...payload, ownerUid: state.firebaseUser.uid });
      if (state.pendingUploads.watchedImage) {
        const file = state.pendingUploads.watchedImage;
        showToast('Uploading poster...', 'info');
        const url = await FB.uploadImage(file, `watchlist/${newId}/poster.jpg`, pct => {});
        await FB.setDocById('watchlist', newId, { imageUrl: url });
      }
      showToast('Watched story added!', 'success');
      showToast('Saved to Firestore: watchlist', 'success');
    }
  } catch (e) {
    console.error('Firestore save error', e);
    showToast('Firestore error: ' + (e && e.message ? e.message : String(e)), 'error');
    const submitBtn = document.getElementById('watchedSubmitBtn');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<span>${state.editingWatchedItem ? 'Save Changes' : 'Add to Watched'}</span>`;
    }
    return;
  }

  delete state.pendingUploads.watchedImage;
  state.isAddEditWatchedOpen = false;
  state.editingWatchedItem = null;
  render();
}

async function handleDeleteWatchedConfirm() {
  if (!state.deleteTarget) return;
  const { id } = state.deleteTarget;

  if (!state.isFirestoreEnabled || !window.__FIREBASE) {
    showToast('Firestore is not available. Cannot delete item.', 'error');
    return;
  }
  if (!state.firebaseUser) {
    showToast('Please sign in as the Owner to delete items.', 'error');
    return;
  }
  try {
    await window.__FIREBASE.deleteDocById('watchlist', id);
    showToast('Story deleted successfully.', 'success');
    showToast('Saved to Firestore: watchlist', 'success');
    state.deleteTarget = null;
    render();
  } catch (e) {
    console.error('Delete failed', e);
    showToast('Firestore error: ' + (e && e.message ? e.message : String(e)), 'error');
  }
}

async function handleSavePost(postPayload) {
  const resetPostSubmitBtn = () => {
    const submitBtn = document.getElementById('postSubmitBtn');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<span>Post Memory</span>`;
    }
  };

  if (!state.isFirestoreEnabled || !window.__FIREBASE) {
    showToast('Firestore is not available. Cannot create post.', 'error');
    resetPostSubmitBtn();
    return;
  }
  if (!state.firebaseUser) {
    showToast('Please sign in as the Owner to create posts.', 'error');
    resetPostSubmitBtn();
    return;
  }
  try {
    const FB = window.__FIREBASE;
    const postId = await FB.createDoc('posts', { ...postPayload, ownerUid: state.firebaseUser.uid });
    if (state.pendingUploads.postImage) {
      const file = state.pendingUploads.postImage;
      showToast('Uploading post image...', 'info');
      const url = await FB.uploadImage(file, `posts/${postId}/image.jpg`, pct => {});
      await FB.setDocById('posts', postId, { imageUrl: url });
      delete state.pendingUploads.postImage;
    }
    state.isAddPostOpen = false;
    showToast('Memory post created!', 'success');
    showToast('Saved to Firestore: posts', 'success');
    render();
  } catch (e) {
    console.error('Post save failed', e);
    showToast('Firestore error: ' + (e && e.message ? e.message : String(e)), 'error');
    const submitBtn = document.getElementById('postSubmitBtn');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<span>Post Memory</span>`;
    }
  }
}

async function handleDeletePostConfirm(postId) {
  if (!state.isFirestoreEnabled || !window.__FIREBASE) {
    showToast('Firestore is not available. Cannot delete post.', 'error');
    return;
  }
  if (!state.firebaseUser) {
    showToast('Please sign in as the Owner to delete posts.', 'error');
    return;
  }
  try {
    await window.__FIREBASE.deleteDocById('posts', postId);
    state.selectedPost = null;
    showToast('Post deleted successfully.', 'success');
    showToast('Saved to Firestore: posts', 'success');
    render();
  } catch (e) {
    console.error('Delete post failed', e);
    showToast('Firestore error: ' + (e && e.message ? e.message : String(e)), 'error');
  }
}

async function handleSaveProfile(updated) {
  if (!state.isFirestoreEnabled || !window.__FIREBASE) {
    showToast('Firestore is not available. Cannot save profile.', 'error');
    return;
  }
  if (!state.firebaseUser) {
    showToast('Please sign in as the Owner to update the profile.', 'error');
    return;
  }
  try {
    const FB = window.__FIREBASE;
    if (state.pendingUploads.profileImage) {
      const file = state.pendingUploads.profileImage;
      showToast('Uploading profile image...', 'info');
      const url = await FB.uploadImage(file, `profile/profileImage.jpg`, pct => {});
      updated.profileImage = url;
      delete state.pendingUploads.profileImage;
    }
    if (state.pendingUploads.bannerImage) {
      const file = state.pendingUploads.bannerImage;
      showToast('Uploading banner image...', 'info');
      const url = await FB.uploadImage(file, `profile/bannerImage.jpg`, pct => {});
      updated.bannerImage = url;
      delete state.pendingUploads.bannerImage;
    }
    await FB.setDocById('profile', 'main', { ...updated, lastModifiedBy: state.firebaseUser.uid });
    state.isEditProfileOpen = false;
    showToast('Profile updated successfully!', 'success');
    showToast('Saved to Firestore: profile', 'success');
    render();
  } catch (e) {
    console.error('Profile save failed', e);
    showToast('Firestore error: ' + (e && e.message ? e.message : String(e)), 'error');
    const submitBtn = document.getElementById('profileSubmitBtn');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<span>Save Profile</span>`;
    }
  }
}

function render() {
  document.body.className = '';
  document.body.classList.add(`theme-${state.settings.theme}`);
  document.body.classList.add(`mode-${state.settings.colorMode}`);

  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="app-container">
      ${renderNavigation()}
      <main class="main-content">
        ${state.activeTab === 'home' ? renderHomeTab() : ''}
        ${state.activeTab === 'profile' ? renderProfileTab() : ''}
        ${state.activeTab === 'settings' ? renderSettingsTab() : ''}
      </main>
      ${renderFooter()}
      ${renderModals()}
      ${renderToastContainer()}
    </div>
  `;

  attachEventListeners();
}

function renderNavigation() {
  const t = (key) => getTranslation(state.settings.language, key);
  return `
    <header class="header glass-panel">
      <div class="header-inner">
        <button class="logo-btn" data-tab="home">
          <div class="logo-icon">${ICONS.film}</div>
          <div>
            <span class="logo-text">ᴡᴀᴛᴄʜʟɪꜱᴛ</span>
            <span class="logo-subtitle">ᴘᴇᴀɴᴜᴛꜱ</span>
          </div>
        </button>

        <nav class="desktop-nav">
          <button class="nav-btn ${state.activeTab === 'home' ? 'active' : ''}" data-tab="home">
            ${ICONS.film}<span>${t('home')}</span>
          </button>
          <button class="nav-btn ${state.activeTab === 'profile' ? 'active' : ''}" data-tab="profile">
            ${ICONS.user}<span>${t('profile')}</span>
          </button>
          <button class="nav-btn ${state.activeTab === 'settings' ? 'active' : ''}" data-tab="settings">
            ${ICONS.settings}<span>${t('settings')}</span>
          </button>
        </nav>

        <div class="flex items-center gap-3">
          ${state.isOwner ? `
            <div class="owner-badge">
              ${ICONS.shield}
              <span class="badge-text">${t('owner_active')}</span>
              <span class="md-hidden">Owner</span>
            </div>
          ` : ''}
        </div>
      </div>
    </header>

    <nav class="mobile-nav glass-panel">
      <button class="mobile-nav-btn ${state.activeTab === 'home' ? 'active' : ''}" data-tab="home">
        ${ICONS.film}<span>${t('home')}</span>
      </button>
      <button class="mobile-nav-btn ${state.activeTab === 'profile' ? 'active' : ''}" data-tab="profile">
        ${ICONS.user}<span>${t('profile')}</span>
      </button>
      <button class="mobile-nav-btn ${state.activeTab === 'settings' ? 'active' : ''}" data-tab="settings">
        ${ICONS.settings}<span>${t('settings')}</span>
      </button>
    </nav>
  `;
}

function renderHomeTab() {
  const t = (key) => getTranslation(state.settings.language, key);
  const heroItem = getHeroItem();
  const filteredItems = getFilteredWatchedItems();
  const hasFilters = state.searchQuery || state.selectedGenre !== 'ALL' || state.selectedPlatform !== 'ALL' || state.selectedMediaType !== 'ALL' || state.showFavoritesOnly;

  return `
    <div class="home-tab">
      ${state.isLoading ? renderHeroSkeleton() : renderHeroSection(heroItem)}

      <div class="archive-controls">
        <div class="search-row">
          <div class="search-wrapper">
            <span class="search-icon">${ICONS.search}</span>
            <input type="text" class="search-input" id="searchInput" value="${escapeHtml(state.searchQuery)}" placeholder="${t('search_placeholder')}" />
            ${state.searchQuery ? `<button class="search-clear" id="searchClear">${ICONS.x}</button>` : ''}
          </div>
          ${state.isOwner ? `
            <button class="btn-add-watched" id="btnAddWatched">
              ${ICONS.plus}<span>${t('add_watched')}</span>
            </button>
          ` : ''}
        </div>

        <div class="filters-grid">
          <div class="filter-group">
            <label class="filter-label">${t('genres')}</label>
            <select class="filter-select" id="filterGenre">
              <option value="ALL">ALL GENRES</option>
              ${ALL_GENRES.map(g => `<option value="${g}" ${state.selectedGenre === g ? 'selected' : ''}>${g}</option>`).join('')}
            </select>
          </div>

          <div class="filter-group">
            <label class="filter-label">${t('media_type')}</label>
            <select class="filter-select" id="filterMediaType">
              <option value="ALL">ALL MEDIA TYPES</option>
              ${MEDIA_TYPES.map(mt => `<option value="${mt}" ${state.selectedMediaType === mt ? 'selected' : ''}>${mt}</option>`).join('')}
            </select>
          </div>

          <div class="filter-group">
            <label class="filter-label">${t('platform')}</label>
            <select class="filter-select" id="filterPlatform">
              <option value="ALL">ALL PLATFORMS</option>
              ${PLATFORMS.map(p => `<option value="${p}" ${state.selectedPlatform === p ? 'selected' : ''}>${p}</option>`).join('')}
            </select>
          </div>

          <div class="filter-group">
            <label class="filter-label">${t('sort_by')}</label>
            <select class="filter-select" id="filterSort">
              <option value="newest" ${state.sortBy === 'newest' ? 'selected' : ''}>${t('newest')}</option>
              <option value="oldest" ${state.sortBy === 'oldest' ? 'selected' : ''}>${t('oldest')}</option>
              <option value="highest_rated" ${state.sortBy === 'highest_rated' ? 'selected' : ''}>${t('highest_rated')}</option>
              <option value="lowest_rated" ${state.sortBy === 'lowest_rated' ? 'selected' : ''}>${t('lowest_rated')}</option>
              <option value="a_z" ${state.sortBy === 'a_z' ? 'selected' : ''}>${t('a_z')}</option>
              <option value="z_a" ${state.sortBy === 'z_a' ? 'selected' : ''}>${t('z_a')}</option>
            </select>
          </div>

          <div class="filter-favorites">
            <button class="btn-favorites-filter ${state.showFavoritesOnly ? 'active' : ''}" id="btnFavoritesFilter">
              ${ICONS.heart}<span>${t('favorites')}</span>
            </button>
          </div>
        </div>
      </div>

      <div class="archive-section">
        <div class="archive-header">
          <h2 class="archive-title">${ICONS.film}ᴡᴀᴛᴄʜᴇᴅ ᴄᴏʟʟᴇᴄᴛɪᴏɴ</h2>
          <span class="archive-count">${filteredItems.length} ${filteredItems.length === 1 ? 'story' : 'stories'}</span>
        </div>

        ${state.isLoading ? renderCardSkeletons() : filteredItems.length === 0 ? `
          <div class="empty-state">
            ${ICONS.film}
            <h3>${t('no_stories_found')}</h3>
            <p>${t('no_stories_sub')}</p>
            ${hasFilters ? `<button class="btn-reset-filters" id="btnResetFilters">Reset Filters</button>` : ''}
          </div>
        ` : `
          <div class="cards-grid">
            ${filteredItems.map(item => renderWatchedCard(item)).join('')}
          </div>
        `}
      </div>
    </div>
  `;
}

function renderHeroSection(item) {
  const t = (key) => getTranslation(state.settings.language, key);
  if (!item) {
    return `
      <div class="hero-empty">
        <div class="hero-empty-inner">
          <div class="hero-empty-icon">${ICONS.sparkles}</div>
          <h2 class="hero-empty-title">${t('app_title')}</h2>
          <p class="hero-empty-text">${t('empty_archive')}</p>
        </div>
      </div>
    `;
  }

  return `
    <div class="hero-section">
      <img src="${escapeHtml(item.imageUrl)}" alt="${escapeHtml(item.title)}" class="hero-bg" referrerpolicy="no-referrer" />
      <div class="hero-overlay-1"></div>
      <div class="hero-overlay-2"></div>
      <div class="hero-content">
        <div class="hero-inner">
          <div class="hero-badges">
            <span class="badge badge-watched">${t('status_watched')}</span>
            <span class="badge badge-media">${escapeHtml(item.mediaType)}</span>
            <span class="badge badge-platform">${escapeHtml(item.platform)}</span>
            ${item.featured ? `<span class="badge badge-featured">${ICONS.sparkles} Featured Selection</span>` : ''}
          </div>
          <div>
            <h1 class="hero-title">${escapeHtml(item.title)}</h1>
            ${item.originalTitle ? `<p class="hero-original-title">${escapeHtml(item.originalTitle)}</p>` : ''}
          </div>
          <div class="hero-meta">
            <div class="hero-rating">
              ${ICONS.star}
              <span class="hero-rating-value">${item.rating.toFixed(1)}</span>
              <span class="hero-rating-max">/ 10</span>
            </div>
            <span class="hero-dot">•</span>
            <div class="hero-genres">
              ${item.genres.map((genre, idx) => `${escapeHtml(genre)}${idx < item.genres.length - 1 ? ' • ' : ''}`).join('')}
            </div>
            <span class="hero-dot">•</span>
            <span class="hero-date">Watched ${escapeHtml(item.watchedDate)}</span>
          </div>
          ${item.description ? `<p class="hero-description">${escapeHtml(item.description)}</p>` : ''}
          <div class="hero-actions">
            <button class="btn-primary" data-open-detail="${item.id}">
              ${ICONS.info}<span>${t('view_details')}</span>
            </button>
            <button class="btn-favorite ${item.isFavorite ? 'active' : ''}" data-toggle-fav="${item.id}" title="Toggle Favorite">
              ${ICONS.heart}
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderWatchedCard(item) {
  return `
    <div class="watched-card" data-open-detail="${item.id}">
      <div class="card-poster">
        <img src="${escapeHtml(item.imageUrl)}" alt="${escapeHtml(item.title)}" loading="lazy" referrerpolicy="no-referrer" />
        <div class="card-overlay"></div>
        <div class="card-top-badges">
          <span class="card-watched-badge">WATCHED</span>
          <span class="card-platform-badge">${escapeHtml(item.platform)}</span>
        </div>
        <button class="card-fav-btn ${item.isFavorite ? 'active' : ''}" data-toggle-fav="${item.id}">
          ${ICONS.heart}
        </button>
        ${item.trailerUrl && item.trailerUrl.trim() ? `
          <button class="card-play-btn" data-play-trailer="${item.id}" title="Watch Trailer">
            ${ICONS.play}
          </button>
        ` : ''}
        <div class="card-media-badge"><span>${escapeHtml(item.mediaType)}</span></div>
      </div>
      <div class="card-body">
        <div>
          <h3 class="card-title">${escapeHtml(item.title)}</h3>
          ${item.originalTitle ? `<p class="card-original-title">${escapeHtml(item.originalTitle)}</p>` : ''}
        </div>
        <div class="card-info">
          <div class="card-rating-row">
            <div class="card-rating">
              ${ICONS.star}
              <span>${item.rating.toFixed(1)}</span>
              <span class="card-rating-max">/ 10</span>
            </div>
            <span class="card-date">${escapeHtml(item.watchedDate)}</span>
          </div>
          ${item.season || item.episodes ? `
            <p class="card-episodes">${item.season ? escapeHtml(item.season) : ''}${item.season && item.episodes ? ' • ' : ''}${item.episodes ? escapeHtml(item.episodes) + ' Episodes' : ''}</p>
          ` : ''}
          <p class="card-genres">${item.genres.map(g => escapeHtml(g)).join(' • ')}</p>
        </div>
      </div>
    </div>
  `;
}

function renderProfileTab() {
  const t = (key) => getTranslation(state.settings.language, key);
  const watchedCount = state.watchedItems.length;
  const favoritesCount = state.watchedItems.filter(item => item.isFavorite).length;
  const postsCount = state.posts.length;

  if (state.isLoading) {
    return `
      <div class="profile-tab">
        <div class="profile-skeleton">
          <div class="profile-skeleton-banner"></div>
          <div class="profile-skeleton-body">
            <div class="profile-skeleton-avatar"></div>
            <div class="profile-skeleton-line short"></div>
            <div class="profile-skeleton-line"></div>
            <div class="profile-skeleton-line"></div>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="profile-tab">
      <div class="profile-card">
        <div class="profile-banner">
          <img src="${escapeHtml(state.profile.bannerImage)}" alt="Profile Banner" referrerpolicy="no-referrer" />
          <div class="profile-banner-overlay"></div>
        </div>

        <div class="profile-info-row">
          <div class="profile-identity">
            <div class="profile-avatar">
              <img src="${escapeHtml(state.profile.profileImage)}" alt="${escapeHtml(state.profile.displayName)}" referrerpolicy="no-referrer" />
            </div>
            <div class="profile-names">
              <div class="profile-name-row">
                <h1 class="profile-name">${escapeHtml(state.profile.displayName)}</h1>
                ${ICONS.sparkles}
              </div>
              <p class="profile-username">${escapeHtml(state.profile.username)}</p>
              <p class="profile-bio">${escapeHtml(state.profile.bio)}</p>
            </div>
          </div>

          <div class="profile-stats">
            <div class="stat-item">
              <span class="stat-value">${postsCount}</span>
              <span class="stat-label">${t('posts')}</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-value">${watchedCount}</span>
              <span class="stat-label">${t('watched')}</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-value amber">${favoritesCount}</span>
              <span class="stat-label">${t('favorites')}</span>
            </div>
          </div>
        </div>

        ${state.isOwner ? `
          <div class="owner-controls">
            <span class="owner-controls-text">Owner Mode Active — Manage your profile & gallery posts.</span>
            <div class="owner-controls-btns">
              <button class="btn-edit-profile" id="btnEditProfile">
                ${ICONS.edit}${t('edit_profile')}
              </button>
              <button class="btn-add-post" id="btnAddPost">
                ${ICONS.plus}${t('add_post')}
              </button>
            </div>
          </div>
        ` : ''}
      </div>

      <div class="album-section">
        <div class="album-header">
          <h2 class="album-title">${ICONS.image}ᴀʟʙᴜᴍ</h2>
          <span class="album-count">${state.posts.length} ${state.posts.length === 1 ? 'photo' : 'photos'}</span>
        </div>

        ${state.posts.length === 0 ? `
          <div class="album-empty">
            ${ICONS.image}
            <p>${t('no_posts_yet')}</p>
            ${state.isOwner ? `
              <button class="btn-post-first" id="btnAddPostEmpty">
                ${ICONS.plus}Post First Memory
              </button>
            ` : ''}
          </div>
        ` : `
          <div class="album-grid">
            ${state.posts.map(post => `
              <div class="post-card" data-open-post="${post.id}">
                <img src="${escapeHtml(post.imageUrl)}" alt="Memory Post" loading="lazy" referrerpolicy="no-referrer" />
                ${state.isOwner ? `
                  <button class="post-card-delete" data-delete-post="${post.id}" title="Delete photo">${ICONS.trash}</button>
                ` : ''}
              </div>
            `).join('')}
          </div>
        `}
      </div>
    </div>
  `;
}

function renderSettingsTab() {
  const t = (key) => getTranslation(state.settings.language, key);
  return `
    <div class="settings-tab">
      <div class="settings-header">
        <h1 class="settings-title">${ICONS.palette}${t('settings')}</h1>
        <p class="settings-subtitle">Customize themes, languages, and owner access preferences.</p>
      </div>

      <div class="settings-grid">
        <div class="settings-card">
          <div class="settings-card-header">
            ${ICONS.palette}
            <h2 class="settings-card-title">${t('appearance')}</h2>
          </div>

          <div>
            <label class="settings-label">Color Mode</label>
            <div class="color-mode-grid">
              <button class="color-mode-btn ${state.settings.colorMode === 'dark' ? 'active' : ''}" data-color-mode="dark">
                <span class="moon-icon">${ICONS.moon}</span>${t('dark_mode')}
              </button>
              <button class="color-mode-btn ${state.settings.colorMode === 'light' ? 'active active-light' : ''}" data-color-mode="light">
                <span class="sun-icon">${ICONS.sun}</span>${t('light_mode')}
              </button>
            </div>
          </div>

          <div>
            <label class="settings-label">${t('theme_customize')}</label>
            <div class="theme-presets">
              ${THEME_PRESETS.map(preset => `
                <button class="theme-preset-btn ${state.settings.theme === preset.id ? 'active' : ''}" data-theme="${preset.id}">
                  <div class="theme-preset-left">
                    <div class="theme-color-dot" style="background-color: ${preset.bg}"></div>
                    <span>${preset.name}</span>
                  </div>
                  ${state.settings.theme === preset.id ? `<span class="theme-check">${ICONS.check}</span>` : ''}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="settings-card">
          <div class="settings-card-header">
            ${ICONS.globe}
            <h2 class="settings-card-title">${t('language')}</h2>
          </div>
          <p class="settings-card-desc">Select your preferred interface language. The archive supports over 20 global languages.</p>
          <div>
            <label class="settings-label">Active Language</label>
            <select class="language-select" id="languageSelect">
              ${LANGUAGES.map(lang => `
                <option value="${lang.code}" ${state.settings.language === lang.code ? 'selected' : ''}>
                  ${lang.name} (${lang.nativeName})
                </option>
              `).join('')}
            </select>
          </div>
        </div>


      </div>

      <div class="settings-card">
        <div class="settings-card-header">
          ${ICONS.user}
          <h2 class="settings-card-title">Edit mode</h2>
        </div>
        <div style="padding:12px">
          ${state.firebaseUser ? `
            <div class="owner-active-box">
              ${ICONS.user}
              <div>
                <div class="owner-active-title">${t('owner_active') || 'Owner Mode Active'}</div>
                <div class="owner-active-desc">Signed in as ${escapeHtml(state.firebaseUser.email || state.firebaseUser.displayName || state.firebaseUser.uid)}</div>
              </div>
            </div>
            <div style="margin-top:12px">
              <button class="btn-lock-owner" id="btnFirebaseSignOut">Sign out</button>
            </div>
          ` : `
            <p class="settings-card-desc">Only Peanut can access Edit Mode.
</p>
            <form class="owner-form" id="ownerEmailForm" style="margin-top:8px">
              <div class="owner-input-wrapper">
                <span class="owner-input-icon owner-input-icon-left">${ICONS.user}</span>
                <input type="email" class="owner-input" id="ownerEmailInput" placeholder="Email" autocomplete="username" />
              </div>
              <div class="owner-input-wrapper">
                <span class="owner-input-icon owner-input-icon-left">${ICONS.lock}</span>
                <input type="password" class="owner-input" id="ownerPasswordInput" placeholder="Password" autocomplete="current-password" />
              </div>
              <button type="submit" class="btn-signin-modern" id="btnFirebaseSignIn">
                <span class="btn-signin-icon">${ICONS.lock}</span>
                <span class="btn-signin-label">Sign in</span>
              </button>
            </form>
          `}
        </div>
      </div>

      <div class="about-card">
        <div class="about-icon">${ICONS.sparkles}</div>
        <div>
          <h3 class="about-title">ᴡᴀᴛᴄʜʟɪꜱᴛ</h3>
          <p class="about-text">${t('about_text')}</p>
          <p class="about-version">ᴠᴇʀꜱɪᴏɴ 2.5 • ᴘᴇʀꜱᴏɴᴀʟ ᴇᴅɪᴛɪᴏɴ</p>
        </div>
      </div>
    </div>
  `;
}

function renderFooter() {
  return `
    <footer class="footer">
      <p class="footer-title">WATCHLIST</p>
      <p class="footer-text">A personal collection of stories to remember.
</p>
    </footer>
  `;
}

function renderModals() {
  let html = '';

  if (state.selectedWatched) {
    html += renderDetailModal(state.selectedWatched);
  }

  if (state.isAddEditWatchedOpen) {
    html += renderAddEditWatchedModal();
  }

  if (state.isAddPostOpen) {
    html += renderAddPostModal();
  }

  if (state.isEditProfileOpen) {
    html += renderEditProfileModal();
  }

  if (state.selectedTrailer) {
    html += renderTrailerModal();
  }

  if (state.deleteTarget) {
    html += renderDeleteConfirmModal();
  }

  if (state.viewImageUrl) {
    html += renderImageZoomModal();
  }

  return html;
}

function renderImageZoomModal() {
  return `
    <div class="modal-overlay image-zoom-overlay">
      <div class="modal-backdrop-blur-lg" data-close-image-view></div>
      <div class="image-zoom-modal">
        <button class="viewer-close" data-close-image-view>${ICONS.x}</button>
        <img src="${escapeHtml(state.viewImageUrl)}" alt="" referrerpolicy="no-referrer" />
      </div>
    </div>
  `;
}

function renderDetailModal(item) {
  const t = (key) => getTranslation(state.settings.language, key);
  return `
    <div class="modal-overlay">
      <div class="modal-backdrop" data-close-modal></div>
      <div class="modal-box detail-modal">
        <div class="detail-ambient" style="background-image: url('${escapeHtml(item.imageUrl)}')"></div>
        <div class="detail-poster" data-view-image="${escapeHtml(item.imageUrl)}">
          <img src="${escapeHtml(item.imageUrl)}" alt="${escapeHtml(item.title)}" referrerpolicy="no-referrer" />
          <div class="detail-poster-overlay"></div>
        </div>
        <div class="detail-content">
          <button class="modal-close-btn" data-close-modal>${ICONS.x}</button>
          <div class="detail-body">
            <div class="detail-badges">
              <span class="detail-badge detail-badge-watched">WATCHED</span>
              <span class="detail-badge detail-badge-media">${ICONS.clapperboard}${escapeHtml(item.mediaType)}</span>
              <span class="detail-badge detail-badge-platform">${ICONS.tv}${escapeHtml(item.platform)}</span>
              ${item.featured ? `<span class="detail-badge detail-badge-featured">${ICONS.sparkles} Featured</span>` : ''}
            </div>
            <div>
              <h2 class="detail-title">${escapeHtml(item.title)}</h2>
              ${item.originalTitle ? `<p class="detail-original-title">${escapeHtml(item.originalTitle)}</p>` : ''}
            </div>
            <div class="detail-meta">
              <div class="detail-rating">
                ${ICONS.star}
                <span class="detail-rating-value">${item.rating.toFixed(1)}</span>
                <span class="detail-rating-max">/ 10.0</span>
              </div>
              <div class="detail-date">
                ${ICONS.calendar}<span>Watched ${escapeHtml(item.watchedDate)}</span>
              </div>
              ${item.season ? `
                <div class="detail-date">
                  ${ICONS.tv}<span>${escapeHtml(item.season)}</span>
                </div>
              ` : ''}
              ${item.episodes ? `
                <div class="detail-date">
                  ${ICONS.clapperboard}<span>${escapeHtml(item.episodes)} Episodes</span>
                </div>
              ` : ''}
            </div>
            <div>
              <h4 class="detail-section-title">${t('genres')}</h4>
              <div class="detail-genres">
                ${item.genres.map(genre => `<span class="detail-genre-chip">${escapeHtml(genre)}</span>`).join('')}
              </div>
            </div>
            ${item.description ? `
              <div>
                <h4 class="detail-section-title">${t('description')}</h4>
                <p class="detail-description">${escapeHtml(item.description)}</p>
              </div>
            ` : ''}
          </div>
          <div class="detail-actions">
            <button class="btn-favorite-detail ${item.isFavorite ? 'active' : ''}" data-toggle-fav-detail="${item.id}">
              ${ICONS.heart}<span>${item.isFavorite ? 'Favorited' : 'Add to Favorites'}</span>
            </button>
            ${item.trailerUrl && item.trailerUrl.trim() ? `
              <button class="btn-watch-trailer" data-play-trailer="${item.id}">
                ${ICONS.play}<span>Watch Trailer</span>
              </button>
            ` : ''}
            ${state.isOwner ? `
              <div class="detail-owner-actions">
                <button class="btn-edit" data-edit-watched="${item.id}">
                  ${ICONS.edit}<span>Edit</span>
                </button>
                <button class="btn-delete" data-delete-watched="${item.id}">
                  ${ICONS.trash}<span>Delete</span>
                </button>
              </div>
            ` : ''}
          </div>
        </div>
      </div>
  </div>
  `;
}

function renderTrailerModal() {
  const item = state.selectedTrailer;
  const embedUrl = getEmbedUrl(item?.trailerUrl || '');

  return `
   <div class="modal-overlay">
     <div class="modal-backdrop" data-close-modal></div>
     <div class="modal-box trailer-modal">
       <div class="modal-header">
         <h2 class="modal-header-title">${item?.title ? escapeHtml(item.title) : 'Trailer'}</h2>
         <button class="modal-header-close" data-close-modal>${ICONS.x}</button>
       </div>
       <div class="trailer-player">
         <iframe
           src="${escapeHtml(embedUrl)}"
           allow="autoplay; encrypted-media; picture-in-picture"
           allowfullscreen
         ></iframe>
       </div>
       <div class="trailer-info">
         <div class="trailer-info-row">
           <div class="trailer-info-left">
             <h3 class="trailer-card-title">${escapeHtml(item.title)}</h3>
             ${item.originalTitle ? `<p class="trailer-card-subtitle">${escapeHtml(item.originalTitle)}</p>` : ''}
           </div>
           <div class="trailer-info-badges">
             <span class="trailer-badge">WATCHED</span>
             <span class="trailer-badge">${escapeHtml(item.mediaType)}</span>
             <span class="trailer-badge">${escapeHtml(item.platform)}</span>
           </div>
         </div>
         <div class="trailer-details">
           <div class="trailer-meta-item"><strong>Rating:</strong> ${item.rating.toFixed(1)} / 10</div>
           <div class="trailer-meta-item"><strong>Watched:</strong> ${escapeHtml(item.watchedDate)}</div>
           ${item.season ? `<div class="trailer-meta-item"><strong>Season:</strong> ${escapeHtml(item.season)}</div>` : ''}
           ${item.episodes ? `<div class="trailer-meta-item"><strong>Episodes:</strong> ${escapeHtml(item.episodes)}</div>` : ''}
           ${item.genres && item.genres.length ? `<div class="trailer-meta-item"><strong>Genres:</strong> ${escapeHtml(item.genres.join(' • '))}</div>` : ''}
         </div>
       </div>
     </div>
   </div>
  `;
}

function renderAddEditWatchedModal() {
  const editing = state.editingWatchedItem;
  const title = editing ? 'EDIT STORY' : 'ADD TO WATCHED';
  const defaultGenres = editing ? editing.genres : ["Drama"];
  const defaultMediaType = editing ? editing.mediaType : "Anime";
  const defaultPlatform = editing ? editing.platform : "Netflix";
  const defaultDate = editing ? editing.watchedDate : new Date().toISOString().split('T')[0];
  const defaultRating = editing ? editing.rating : 9.0;
  const defaultImage = editing ? editing.imageUrl : '';
  const defaultTrailer = editing ? editing.trailerUrl || '' : '';

  return `
    <div class="modal-overlay">
      <div class="modal-backdrop" data-close-modal></div>
      <div class="modal-box form-modal">
        <div class="modal-header">
          <h2 class="modal-header-title">${title}</h2>
          <button class="modal-header-close" data-close-modal>${ICONS.x}</button>
        </div>
        <form class="modal-form" id="watchedForm">
          <div class="form-grid-2">
            <div>
              <label class="form-label">Title *</label>
              <input type="text" class="form-input" id="watchedTitle" value="${escapeHtml(editing ? editing.title : '')}" placeholder="e.g. Spirited Away" required />
            </div>
            <div>
              <label class="form-label">Original Title</label>
              <input type="text" class="form-input" id="watchedOriginalTitle" value="${escapeHtml(editing ? editing.originalTitle || '' : '')}" placeholder="e.g. 千と千尋の神隠し" />
            </div>
          </div>

          <div class="image-input-section">
            <div class="image-input-header">
              <label class="image-input-label">Image Source *</label>
            </div>
            <div class="image-file-input">
              <input type="file" id="watchedImageFile" accept="image/*" />
              <small class="muted">Upload a poster image from your device, or paste an image URL below.</small>
            </div>
            <div id="imageUrlArea">
              <input type="url" class="form-input" id="watchedImageUrl" value="${escapeHtml(defaultImage)}" placeholder="Paste Image URL (https://...)" />
            </div>
            <div id="watchedImagePreview" class="image-preview-row ${defaultImage ? '' : 'hidden'}">
              <div class="image-preview-thumb">
                <img src="${escapeHtml(defaultImage)}" alt="Preview" />
              </div>
              <div class="image-preview-info">
                <p class="image-preview-title">Preview Ready</p>
                <p class="image-preview-desc">Image URL loaded.</p>
              </div>
            </div>
          </div>

          <div class="rating-section">
            <div class="rating-header">
              <label class="rating-label">${ICONS.star}Rating (0.0 to 10.0)</label>
              <span class="rating-value" id="ratingValue">${defaultRating.toFixed(1)} / 10</span>
            </div>
            <input type="range" class="rating-slider" id="watchedRating" min="0" max="10" step="0.1" value="${defaultRating}" />
          </div>

          <div class="form-grid-2">
            <div>
              <label class="form-label">Media Type</label>
              <select class="form-input" id="watchedMediaType">
                ${MEDIA_TYPES.map(mt => `<option value="${mt}" ${defaultMediaType === mt ? 'selected' : ''}>${mt}</option>`).join('')}
              </select>
            </div>
            <div>
              <label class="form-label">Platform</label>
              <select class="form-input" id="watchedPlatform">
                ${PLATFORMS.map(p => `<option value="${p}" ${defaultPlatform === p ? 'selected' : ''}>${p}</option>`).join('')}
              </select>
            </div>
          </div>

          <div class="form-grid-2">
            <div>
              <label class="form-label">Season</label>
              <input type="number" min="1" class="form-input" id="watchedSeason" value="${editing ? editing.season || '' : ''}" placeholder="e.g. 1" />
            </div>
            <div>
              <label class="form-label">Episodes</label>
              <input type="number" min="1" class="form-input" id="watchedEpisodes" value="${editing ? editing.episodes || '' : ''}" placeholder="e.g. 24" />
            </div>
          </div>

          <div>
            <label class="form-label">Watched Date</label>
            <input type="date" class="form-input" id="watchedDate" value="${defaultDate}" />
          </div>

          <div>
            <label class="form-label">Trailer URL</label>
            <input type="url" class="form-input" id="watchedTrailerUrl" value="${escapeHtml(defaultTrailer)}" placeholder="Paste Trailer URL (YouTube, Vimeo, etc.)" />
          </div>

          <div>
            <label class="form-label">Genres (Select Multiple)</label>
            <div class="genre-chips" id="genreChips">
              ${ALL_GENRES.map(genre => `
                <button type="button" class="genre-chip ${defaultGenres.includes(genre) ? 'active' : ''}" data-genre="${genre}">
                  ${defaultGenres.includes(genre) ? ICONS.check : ''}${genre}
                </button>
              `).join('')}
            </div>
          </div>

          <div class="toggle-grid">
            <label class="toggle-label">
              <input type="checkbox" class="toggle-checkbox" id="watchedFavorite" ${editing && editing.isFavorite ? 'checked' : ''} />
              <span class="toggle-text">Favorite Story</span>
            </label>
            <label class="toggle-label">
              <input type="checkbox" class="toggle-checkbox" id="watchedFeatured" ${editing && editing.featured ? 'checked' : ''} />
              <span class="toggle-text-blue">Featured Hero</span>
            </label>
          </div>

          <div>
            <label class="form-label">Description / Review</label>
            <textarea rows="3" class="form-textarea" id="watchedDescription" placeholder="Write a brief personal summary or review...">${escapeHtml(editing ? editing.description || '' : '')}</textarea>
          </div>

          <div class="form-actions">
            <button type="button" class="btn-cancel" data-close-modal>Cancel</button>
            <button type="submit" class="btn-submit" id="watchedSubmitBtn">
              <span>${editing ? 'Save Changes' : 'Add to Watched'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}

function renderAddPostModal() {
  return `
    <div class="modal-overlay">
      <div class="modal-backdrop" data-close-modal></div>
      <div class="modal-box post-modal">
        <div class="modal-header">
          <h2 class="modal-header-title">ADD PROFILE MEMORY POST</h2>
          <button class="modal-header-close" data-close-modal>${ICONS.x}</button>
        </div>
        <form class="post-form" id="postForm">
          <div class="image-input-section">
            <div class="image-input-header">
              <label class="image-input-label">Image Source *</label>
            </div>
            <div id="postUrlArea">
              <input type="file" id="postImageFile" accept="image/*" />
              <div style="margin-top:8px"></div>
              <input type="url" class="form-input" id="postImageUrl" placeholder="Paste Image URL" />
            </div>
            <div id="postPreview" class="post-preview hidden">
              <div class="post-preview-container" id="postPreviewContainer">
                <img src="" alt="Preview" id="postPreviewImg" />
              </div>
              <div class="post-preview-controls">
                <button type="button" class="preview-zoom-btn" id="previewZoomOut">−</button>
                <span class="preview-zoom-label">Drag to fit</span>
                <button type="button" class="preview-zoom-btn" id="previewZoomIn">+</button>
              </div>
            </div>
          </div>

          <div class="form-actions">
            <button type="button" class="btn-cancel" data-close-modal>Cancel</button>
            <button type="submit" class="btn-submit" id="postSubmitBtn">
              <span>Post Memory</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}

function renderEditProfileModal() {
  return `
    <div class="modal-overlay">
      <div class="modal-backdrop" data-close-modal></div>
      <div class="modal-box profile-modal">
        <div class="modal-header">
          <h2 class="modal-header-title">EDIT PROFILE</h2>
          <button class="modal-header-close" data-close-modal>${ICONS.x}</button>
        </div>
        <form class="profile-form" id="profileForm">
          <div>
            <label class="form-label">Display Name</label>
            <input type="text" class="form-input" id="profileDisplayName" value="${escapeHtml(state.profile.displayName)}" required />
          </div>
          <div>
            <label class="form-label">Username</label>
            <input type="text" class="form-input" id="profileUsername" value="${escapeHtml(state.profile.username)}" required />
          </div>
          <div>
            <label class="form-label">Bio</label>
            <textarea rows="3" class="form-textarea" id="profileBio">${escapeHtml(state.profile.bio)}</textarea>
          </div>

          <div class="image-upload-box">
            <label class="image-upload-label">Profile Avatar Image</label>
            <input type="file" id="profileImageFile" accept="image/*" />
            <div style="margin-top:8px"></div>
            <input type="url" class="image-upload-input" id="profileImageUrl" value="${escapeHtml(state.profile.profileImage)}" placeholder="Paste Profile Image URL" />
          </div>

          <div class="image-upload-box">
            <label class="image-upload-label">Banner Cover Image</label>
            <input type="file" id="bannerImageFile" accept="image/*" />
            <div style="margin-top:8px"></div>
            <input type="url" class="image-upload-input" id="bannerImageUrl" value="${escapeHtml(state.profile.bannerImage)}" placeholder="Paste Banner Image URL" />
          </div>

          <div class="form-actions">
            <button type="button" class="btn-cancel" data-close-modal>Cancel</button>
            <button type="submit" class="btn-submit" id="profileSubmitBtn">
              <span>Save Profile</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}

function renderDeleteConfirmModal() {
  const t = (key) => getTranslation(state.settings.language, key);
  return `
    <div class="modal-overlay">
      <div class="modal-backdrop" data-close-modal></div>
      <div class="modal-box confirm-modal">
        <div class="confirm-icon">${ICONS.alert}</div>
        <h3 class="confirm-title">Delete "${escapeHtml(state.deleteTarget.title)}"?</h3>
        <p class="confirm-message">${t('delete_confirm_sub')}</p>
        <div class="confirm-actions">
          <button class="btn-cancel" data-close-modal>${t('cancel')}</button>
          <button class="btn-confirm-delete" id="btnConfirmDelete">${t('delete')}</button>
        </div>
      </div>
    </div>
  `;
}

function renderToastContainer() {
  if (state.toasts.length === 0) return '';
  return `
    <div class="toast-container">
      ${state.toasts.map(toast => `
        <div class="toast">
          <div class="toast-content">
            <span class="toast-icon ${toast.type || 'info'}">
              ${toast.type === 'success' ? ICONS.checkCircle : toast.type === 'error' ? ICONS.alertCircle : ICONS.info}
            </span>
            <span>${escapeHtml(toast.text)}</span>
          </div>
          <button class="toast-close" data-dismiss-toast="${toast.id}">${ICONS.x}</button>
        </div>
      `).join('')}
    </div>
  `;
}

function renderToasts() {
  const container = document.querySelector('.toast-container');
  if (container) {
    container.innerHTML = state.toasts.map(toast => `
      <div class="toast">
        <div class="toast-content">
          <span class="toast-icon ${toast.type || 'info'}">
            ${toast.type === 'success' ? ICONS.checkCircle : toast.type === 'error' ? ICONS.alertCircle : ICONS.info}
          </span>
          <span>${escapeHtml(toast.text)}</span>
        </div>
        <button class="toast-close" data-dismiss-toast="${toast.id}">${ICONS.x}</button>
      </div>
    `).join('');
  }
}

function renderHeroSkeleton() {
  return `
    <div class="hero-skeleton">
      <div class="hero-skeleton-bg"></div>
    </div>
  `;
}

function renderCardSkeletons() {
  let html = '<div class="cards-grid">';
  for (let i = 0; i < 10; i++) {
    html += `
      <div class="card-skeleton">
        <div class="card-skeleton-poster"></div>
        <div class="card-skeleton-body">
          <div class="card-skeleton-line"></div>
          <div class="card-skeleton-line short"></div>
        </div>
      </div>
    `;
  }
  html += '</div>';
  return html;
}

function attachEventListeners() {
  document.querySelectorAll('[data-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeTab = btn.dataset.tab;
      render();
    });
  });

  document.querySelectorAll('[data-close-modal]').forEach(el => {
    el.addEventListener('click', () => {
      state.selectedWatched = null;
      state.selectedTrailer = null;
      state.selectedPost = null;
      state.isAddEditWatchedOpen = false;
      state.editingWatchedItem = null;
      state.isAddPostOpen = false;
      state.isEditProfileOpen = false;
      state.deleteTarget = null;
      render();
    });
  });

  document.querySelectorAll('[data-view-image]').forEach(el => {
    el.addEventListener('click', () => {
      state.viewImageUrl = el.dataset.viewImage;
      render();
    });
  });

  document.querySelectorAll('[data-close-image-view]').forEach(el => {
    el.addEventListener('click', () => {
      state.viewImageUrl = null;
      render();
    });
  });

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        state.searchQuery = e.target.value;
        render();
      }, 500);
    });
  }

  const searchClear = document.getElementById('searchClear');
  if (searchClear) {
    searchClear.addEventListener('click', () => {
      state.searchQuery = '';
      render();
    });
  }

  const filterGenre = document.getElementById('filterGenre');
  if (filterGenre) {
    filterGenre.addEventListener('change', (e) => {
      state.selectedGenre = e.target.value;
      render();
    });
  }

  const filterMediaType = document.getElementById('filterMediaType');
  if (filterMediaType) {
    filterMediaType.addEventListener('change', (e) => {
      state.selectedMediaType = e.target.value;
      render();
    });
  }

  const filterPlatform = document.getElementById('filterPlatform');
  if (filterPlatform) {
    filterPlatform.addEventListener('change', (e) => {
      state.selectedPlatform = e.target.value;
      render();
    });
  }

  const filterSort = document.getElementById('filterSort');
  if (filterSort) {
    filterSort.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      render();
    });
  }

  const btnFavoritesFilter = document.getElementById('btnFavoritesFilter');
  if (btnFavoritesFilter) {
    btnFavoritesFilter.addEventListener('click', () => {
      state.showFavoritesOnly = !state.showFavoritesOnly;
      render();
    });
  }

  const btnResetFilters = document.getElementById('btnResetFilters');
  if (btnResetFilters) {
    btnResetFilters.addEventListener('click', () => {
      state.searchQuery = '';
      state.selectedGenre = 'ALL';
      state.selectedPlatform = 'ALL';
      state.selectedMediaType = 'ALL';
      state.showFavoritesOnly = false;
      render();
    });
  }

  const btnAddWatched = document.getElementById('btnAddWatched');
  if (btnAddWatched) {
    btnAddWatched.addEventListener('click', () => {
      state.editingWatchedItem = null;
      state.isAddEditWatchedOpen = true;
      render();
    });
  }

  document.querySelectorAll('[data-open-detail]').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.dataset.openDetail;
      const item = state.watchedItems.find(w => w.id === id);
      if (item) {
        state.selectedWatched = item;
        state.selectedTrailer = null;
        render();
      }
    });
  });

  document.querySelectorAll('[data-toggle-fav]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = el.dataset.toggleFav;
      const item = state.watchedItems.find(w => w.id === id);
      if (item) handleToggleFavorite(item, e);
    });
  });

  document.querySelectorAll('[data-play-trailer]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.playTrailer;
      const item = state.watchedItems.find(w => w.id === id);
      if (!item) return;
      if (item.trailerUrl && item.trailerUrl.trim()) {
        state.selectedTrailer = item;
        state.selectedWatched = null;
      } else {
        state.selectedWatched = item;
        state.selectedTrailer = null;
      }
      state.selectedPost = null;
      state.isAddEditWatchedOpen = false;
      state.editingWatchedItem = null;
      state.isAddPostOpen = false;
      state.isEditProfileOpen = false;
      state.deleteTarget = null;
      render();
    });
  });

  const toggleFavDetail = document.querySelector('[data-toggle-fav-detail]');
  if (toggleFavDetail) {
    toggleFavDetail.addEventListener('click', () => {
      const id = toggleFavDetail.dataset.toggleFavDetail;
      const item = state.watchedItems.find(w => w.id === id);
      if (item) handleToggleFavorite(item);
    });
  }

  document.querySelectorAll('[data-edit-watched]').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.dataset.editWatched;
      const item = state.watchedItems.find(w => w.id === id);
      if (item) {
        state.editingWatchedItem = item;
        state.selectedWatched = null;
        state.isAddEditWatchedOpen = true;
        render();
      }
    });
  });

  document.querySelectorAll('[data-delete-watched]').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.dataset.deleteWatched;
      const item = state.watchedItems.find(w => w.id === id);
      if (item) {
        state.selectedWatched = null;
        state.deleteTarget = { type: 'watched', id: item.id, title: item.title };
        render();
      }
    });
  });

  const btnConfirmDelete = document.getElementById('btnConfirmDelete');
  if (btnConfirmDelete) {
    btnConfirmDelete.addEventListener('click', () => {
      if (state.deleteTarget && state.deleteTarget.type === 'watched') {
        handleDeleteWatchedConfirm();
      }
    });
  }

  const btnEditProfile = document.getElementById('btnEditProfile');
  if (btnEditProfile) {
    btnEditProfile.addEventListener('click', () => {
      state.isEditProfileOpen = true;
      render();
    });
  }

  document.querySelectorAll('#btnAddPost, #btnAddPostEmpty').forEach(btn => {
    btn.addEventListener('click', () => {
      state.isAddPostOpen = true;
      render();
    });
  });

  document.querySelectorAll('[data-open-post]').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.dataset.openPost;
      const post = state.posts.find(p => p.id === id);
      if (post) {
        state.viewImageUrl = post.imageUrl;
        render();
      }
    });
  });

  document.querySelectorAll('[data-delete-post]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = el.dataset.deletePost;
      handleDeletePostConfirm(id);
    });
  });

  document.querySelectorAll('[data-color-mode]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.settings.colorMode = btn.dataset.colorMode;
      saveSettings();
      render();
    });
  });

  document.querySelectorAll('[data-theme]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.settings.theme = btn.dataset.theme;
      saveSettings();
      render();
    });
  });

  const languageSelect = document.getElementById('languageSelect');
  if (languageSelect) {
    languageSelect.addEventListener('change', (e) => {
      state.settings.language = e.target.value;
      saveSettings();
      render();
    });
  }

  const ownerEmailForm = document.getElementById('ownerEmailForm');
  if (ownerEmailForm) {
    ownerEmailForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('ownerEmailInput');
      const passwordInput = document.getElementById('ownerPasswordInput');
      const email = emailInput ? emailInput.value.trim() : '';
      const password = passwordInput ? passwordInput.value : '';
      if (!email || !password) {
        showToast('Please enter your email and password.', 'error');
        return;
      }
      if (!window.__FIREBASE || !window.__FIREBASE.signIn) {
        showToast('Firebase Auth not available.', 'error');
        return;
      }
      const signInBtn = document.getElementById('btnFirebaseSignIn');
      if (signInBtn) {
        signInBtn.disabled = true;
        signInBtn.innerHTML = `<span class="btn-signin-icon">${ICONS.loader}</span><span class="btn-signin-label">Signing in...</span>`;
      }
      try {
        state._suppressNextAuthToast = true;
        const cred = await window.__FIREBASE.signIn(email, password);
        const user = (cred && cred.user) ? cred.user : (window.__FIREBASE.getCurrentUser ? window.__FIREBASE.getCurrentUser() : null);
        state.firebaseUser = user;
        state.isOwner = !!user;
        showToast(`Connected as Owner: ${user && (user.email || user.uid)}`, 'success');
        render();
      } catch (err) {
        console.error('Sign-in failed', err);
        showToast('Sign-in failed: ' + (err.message || ''), 'error');
        if (signInBtn) {
          signInBtn.disabled = false;
          signInBtn.innerHTML = `<span class="btn-signin-icon">${ICONS.lock}</span><span class="btn-signin-label">Sign in</span>`;
        }
      }
    });
  }

  const btnFirebaseSignOut = document.getElementById('btnFirebaseSignOut');
  if (btnFirebaseSignOut) {
    btnFirebaseSignOut.addEventListener('click', async () => {
      if (!window.__FIREBASE || !window.__FIREBASE.signOut) {
        showToast('Firebase Auth not available.', 'error');
        return;
      }
      try {
        state._suppressNextAuthToast = true;
        await window.__FIREBASE.signOut();
        state.firebaseUser = null;
        state.isOwner = false;
        showToast('Signed out', 'info');
        render();
      } catch (err) {
        console.error('Sign-out failed', err);
        showToast('Sign-out failed: ' + (err.message || ''), 'error');
      }
    });
  }

  document.querySelectorAll('[data-dismiss-toast]').forEach(el => {
    el.addEventListener('click', () => {
      dismissToast(el.dataset.dismissToast);
    });
  });

  const watchedForm = document.getElementById('watchedForm');
  if (watchedForm) {
    const urlInput = document.getElementById('watchedImageUrl');
    if (urlInput) {
      urlInput.addEventListener('input', () => {
        const preview = document.getElementById('watchedImagePreview');
        const previewImg = preview.querySelector('img');
        if (urlInput.value) {
          previewImg.src = urlInput.value;
          preview.classList.remove('hidden');
        } else {
          preview.classList.add('hidden');
        }
      });
    }

    const ratingSlider = document.getElementById('watchedRating');
    if (ratingSlider) {
      ratingSlider.addEventListener('input', () => {
        document.getElementById('ratingValue').textContent = `${parseFloat(ratingSlider.value).toFixed(1)} / 10`;
      });
    }

    document.querySelectorAll('[data-genre]').forEach(chip => {
      chip.addEventListener('click', () => {
        const genre = chip.dataset.genre;
        const isActive = chip.classList.contains('active');
        const activeChips = document.querySelectorAll('.genre-chip.active');
        if (isActive && activeChips.length === 1) {
          showToast("Select at least one genre.", "info");
          return;
        }
        chip.classList.toggle('active');
        if (chip.classList.contains('active')) {
          chip.innerHTML = `${ICONS.check}${genre}`;
        } else {
          chip.textContent = genre;
        }
      });
    });

    watchedForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const title = document.getElementById('watchedTitle').value.trim();
      if (!title) {
        showToast("Please enter a title.", "error");
        return;
      }

      const submitBtn = document.getElementById('watchedSubmitBtn');
      submitBtn.disabled = true;
      submitBtn.innerHTML = `${ICONS.loader}<span>Saving...</span>`;

      const originalTitle = document.getElementById('watchedOriginalTitle').value.trim();
      const rating = parseFloat(document.getElementById('watchedRating').value);
      const mediaType = document.getElementById('watchedMediaType').value;
      const platform = document.getElementById('watchedPlatform').value;
      const season = document.getElementById('watchedSeason').value.trim();
      const episodes = document.getElementById('watchedEpisodes').value.trim();
      const watchedDate = document.getElementById('watchedDate').value;
      const isFavorite = document.getElementById('watchedFavorite').checked;
      const featured = document.getElementById('watchedFeatured').checked;
      const description = document.getElementById('watchedDescription').value.trim();

      const selectedGenres = Array.from(document.querySelectorAll('.genre-chip.active')).map(c => c.dataset.genre);
      const trailerUrl = document.getElementById('watchedTrailerUrl').value.trim();
      const finalImageUrl = document.getElementById('watchedImageUrl').value.trim();

      if (!finalImageUrl && !state.pendingUploads.watchedImage) {
        showToast("Please provide an image URL or upload a poster.", "error");
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span>${state.editingWatchedItem ? 'Save Changes' : 'Add to Watched'}</span>`;
        return;
      }

      const payload = {
        title,
        originalTitle,
        imageUrl: finalImageUrl || '',
        trailerUrl,
        rating: parseFloat(rating.toFixed(1)),
        genres: selectedGenres,
        mediaType,
        platform,
        season,
        episodes,
        watchedDate,
        isFavorite,
        featured,
        description,
      };

      handleSaveWatched(payload, state.editingWatchedItem ? state.editingWatchedItem.id : undefined);
    });
  }

  const postForm = document.getElementById('postForm');
  const watchedFileInput = document.getElementById('watchedImageFile');
  if (watchedFileInput) {
    watchedFileInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        state.pendingUploads.watchedImage = file;
        const preview = document.getElementById('watchedImagePreview');
        if (preview) {
          const img = preview.querySelector('img');
          img.src = URL.createObjectURL(file);
          preview.classList.remove('hidden');
        }
      }
    });
  }

  const postFileInput = document.getElementById('postImageFile');
  if (postFileInput) {
    postFileInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        state.pendingUploads.postImage = file;
        const preview = document.getElementById('postPreview');
        const previewImg = document.getElementById('postPreviewImg');
        const container = document.getElementById('postPreviewContainer');
        if (preview && previewImg) {
          previewImg.src = URL.createObjectURL(file);
          preview.classList.remove('hidden');
          resetPreviewTransform(container, previewImg);
        }
      }
    });
  }

  const profileImageFileInput = document.getElementById('profileImageFile');
  if (profileImageFileInput) {
    profileImageFileInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        state.pendingUploads.profileImage = file;
        const profileImgInput = document.getElementById('profileImageUrl');
        if (profileImgInput) profileImgInput.value = URL.createObjectURL(file);
      }
    });
  }

  const bannerImageFileInput = document.getElementById('bannerImageFile');
  if (bannerImageFileInput) {
    bannerImageFileInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        state.pendingUploads.bannerImage = file;
        const bannerInput = document.getElementById('bannerImageUrl');
        if (bannerInput) bannerInput.value = URL.createObjectURL(file);
      }
    });
  }

  if (postForm) {
    const postUrlInput = document.getElementById('postImageUrl');
    if (postUrlInput) {
      postUrlInput.addEventListener('input', () => {
        const preview = document.getElementById('postPreview');
        const previewImg = document.getElementById('postPreviewImg');
        const container = document.getElementById('postPreviewContainer');
        if (postUrlInput.value) {
          previewImg.src = postUrlInput.value;
          preview.classList.remove('hidden');
          resetPreviewTransform(container, previewImg);
        } else {
          preview.classList.add('hidden');
        }
      });
    }

    const previewContainer = document.getElementById('postPreviewContainer');
    const previewImg = document.getElementById('postPreviewImg');
    if (previewContainer && previewImg) {
      let isDragging = false;
      let startX = 0, startY = 0;
      let currentX = 0, currentY = 0;

      const getCurrentScale = () => state.postPreviewScale || 1;

      previewContainer.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isDragging = true;
        startX = e.clientX - currentX;
        startY = e.clientY - currentY;
        previewContainer.style.cursor = 'grabbing';
      });

      document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        currentX = e.clientX - startX;
        currentY = e.clientY - startY;
        previewImg.style.transform = `translate(${currentX}px, ${currentY}px) scale(${getCurrentScale()})`;
      });

      document.addEventListener('mouseup', () => {
        isDragging = false;
        previewContainer.style.cursor = 'grab';
      });

      const zoomInBtn = document.getElementById('previewZoomIn');
      const zoomOutBtn = document.getElementById('previewZoomOut');
      if (zoomInBtn) {
        zoomInBtn.addEventListener('click', () => {
          state.postPreviewScale = Math.min(getCurrentScale() + 0.1, 3);
          previewImg.style.transform = `translate(${currentX}px, ${currentY}px) scale(${state.postPreviewScale})`;
        });
      }
      if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', () => {
          state.postPreviewScale = Math.max(getCurrentScale() - 0.1, 0.5);
          previewImg.style.transform = `translate(${currentX}px, ${currentY}px) scale(${state.postPreviewScale})`;
        });
      }
    }

    postForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('postSubmitBtn');
      submitBtn.disabled = true;
      submitBtn.innerHTML = `${ICONS.loader}<span>Posting...</span>`;

      const caption = '';
      const finalUrl = document.getElementById('postImageUrl').value.trim();

      if (!finalUrl && !state.pendingUploads.postImage) {
        showToast("Please enter an image URL or upload a photo.", "error");
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span>Post Memory</span>`;
        return;
      }

      handleSavePost({ imageUrl: finalUrl || '', caption });
    });
  }

  const profileForm = document.getElementById('profileForm');
  if (profileForm) {
    profileForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('profileSubmitBtn');
      submitBtn.disabled = true;
      submitBtn.innerHTML = `${ICONS.loader}<span>Saving...</span>`;

      const displayName = document.getElementById('profileDisplayName').value.trim();
      const username = document.getElementById('profileUsername').value.trim();
      const bio = document.getElementById('profileBio').value.trim();
      const profileImage = document.getElementById('profileImageUrl').value.trim();
      const bannerImage = document.getElementById('bannerImageUrl').value.trim();

      handleSaveProfile({
        displayName,
        username,
        bio,
        profileImage,
        bannerImage
      });
    });
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (state.viewImageUrl) {
      state.viewImageUrl = null;
      render();
      return;
    }
    if (state.selectedWatched || state.selectedPost || state.isAddEditWatchedOpen || state.isAddPostOpen || state.isEditProfileOpen || state.deleteTarget) {
      state.selectedWatched = null;
      state.selectedPost = null;
      state.isAddEditWatchedOpen = false;
      state.editingWatchedItem = null;
      state.isAddPostOpen = false;
      state.isEditProfileOpen = false;
      state.deleteTarget = null;
      render();
    }
  }

});

async function init() {
  if (window.__FIREBASE && window.__FIREBASE.db) {
    state.isFirestoreEnabled = true;
    try {
      await setupFirestoreSync();
    } catch (e) {
      console.error('Firestore sync failed to initialize:', e);
      showToast('Firestore connection failed: ' + (e && e.message ? e.message : String(e)), 'error');
      state.isFirestoreEnabled = false;
      state.watchedItems = [];
      state.posts = [];
      state.profile = { ...DEFAULT_USER_PROFILE };
    }
  } else {
    console.error('Firebase is not initialized. Cannot load data from Firestore.');
    showToast('Firebase is not initialized. Data cannot be loaded — please check your Firebase configuration.', 'error');
    state.isFirestoreEnabled = false;
    state.watchedItems = [];
    state.posts = [];
    state.profile = { ...DEFAULT_USER_PROFILE };
  }

  setTimeout(() => {
    state.isLoading = false;
    render();
  }, 500);
}

init();
