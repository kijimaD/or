// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">この本の概要</a></li><li class="chapter-item expanded affix "><li class="part-title">Summary</li><li class="chapter-item expanded "><a href="202501010001_1.html"><strong aria-hidden="true">1.</strong> ORD 1: 地域の区分を見る</a></li><li class="chapter-item expanded "><a href="202501010002_2.html"><strong aria-hidden="true">2.</strong> ORD 2: 折口の干拓を標高図で確認する</a></li><li class="chapter-item expanded "><a href="202501010003_3.html"><strong aria-hidden="true">3.</strong> ORD 3: 折口の交通の変遷を比較する</a></li><li class="chapter-item expanded "><a href="202501010004_4.html"><strong aria-hidden="true">4.</strong> ORD 4: 折口川の概要を見る</a></li><li class="chapter-item expanded "><a href="202501010005_5.html"><strong aria-hidden="true">5.</strong> ORD 5: 折口海岸の概要を見る</a></li><li class="chapter-item expanded "><a href="202501010006_6.html"><strong aria-hidden="true">6.</strong> ORD 6: JR時代の阿久根駅の時刻表を見る</a></li><li class="chapter-item expanded "><a href="202501010007_7.html"><strong aria-hidden="true">7.</strong> ORD 7: 鍋石を観察する</a></li><li class="chapter-item expanded "><a href="202501010008_8.html"><strong aria-hidden="true">8.</strong> ORD 8: 折口の名前の由来は複数ある</a></li><li class="chapter-item expanded "><a href="202501010009_9.html"><strong aria-hidden="true">9.</strong> ORD 9: 鍋石にある伊勢神社を観察する</a></li><li class="chapter-item expanded "><a href="202501010010_10.html"><strong aria-hidden="true">10.</strong> ORD 10: 折口海岸の堆積を比較する</a></li><li class="chapter-item expanded "><a href="202501010011_11.html"><strong aria-hidden="true">11.</strong> ORD 11: 岩船の概要を見る</a></li><li class="chapter-item expanded "><a href="202501010012_12.html"><strong aria-hidden="true">12.</strong> ORD 12: 『阿久根の空襲』</a></li><li class="chapter-item expanded "><a href="202501010013_13.html"><strong aria-hidden="true">13.</strong> ORD 13: 『出水・阿久根・大口の100年』</a></li><li class="chapter-item expanded "><a href="202501010014_14.html"><strong aria-hidden="true">14.</strong> ORD 14: 『阿久根の自然』</a></li><li class="chapter-item expanded "><a href="202501010015_15.html"><strong aria-hidden="true">15.</strong> ORD 15: 旧陣之尾橋はどのようなものだったか?</a></li><li class="chapter-item expanded "><a href="202501010016_16.html"><strong aria-hidden="true">16.</strong> ORD 16: 中津浜海岸沖にある人工物は何か?</a></li><li class="chapter-item expanded "><a href="202501010017_17.html"><strong aria-hidden="true">17.</strong> ORD 17: 中津浜海岸近くにある2つの橋台は何か?</a></li><li class="chapter-item expanded "><a href="202501010018_18.html"><strong aria-hidden="true">18.</strong> ORD 18: 『雄飛 創立百周年記念誌 阿久根市立折多小学校』</a></li><li class="chapter-item expanded "><a href="202501010019_19.html"><strong aria-hidden="true">19.</strong> ORD 19: 岩船の埋没地点を比較する</a></li><li class="chapter-item expanded "><a href="202501010020_20.html"><strong aria-hidden="true">20.</strong> ORD 20: 牟田の海蝕洞を観察する</a></li><li class="chapter-item expanded "><a href="202501010021_21.html"><strong aria-hidden="true">21.</strong> ORD 21: 田島橋下にある構造物は何か?</a></li><li class="chapter-item expanded "><a href="202501010022_22.html"><strong aria-hidden="true">22.</strong> ORD 22: 折多小学校前の歩道帯はなぜ幅が広いのか?</a></li><li class="chapter-item expanded "><a href="202501010023_23.html"><strong aria-hidden="true">23.</strong> ORD 23: 校門の比較をすると面白そう</a></li><li class="chapter-item expanded "><a href="202501010024_24.html"><strong aria-hidden="true">24.</strong> ORD 24: 岩船神社を古写真で比較する</a></li><li class="chapter-item expanded "><a href="202501010026_26.html"><strong aria-hidden="true">25.</strong> ORD 26: 土地改良前の田島橋周辺の航空写真を比較する</a></li><li class="chapter-item expanded "><a href="202501010027_27.html"><strong aria-hidden="true">26.</strong> ORD 27: 折多小学校前の線形改良を比較する</a></li><li class="chapter-item expanded "><a href="202501010028_28.html"><strong aria-hidden="true">27.</strong> ORD 28: 阿久根東郷線は並行在来線問題の補償として整備された</a></li><li class="chapter-item expanded "><a href="202501010029_29.html"><strong aria-hidden="true">28.</strong> ORD 29: 土地改良記念碑を観察する</a></li><li class="chapter-item expanded "><a href="memo.html"><strong aria-hidden="true">29.</strong> メモ</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
