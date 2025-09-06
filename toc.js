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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="qiangwangbei/index.html"><strong aria-hidden="true">1.</strong> 强网杯</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="第八届强网杯2024_线上赛.html"><strong aria-hidden="true">1.1.</strong> 第八届强网杯线上赛</a></li><li class="chapter-item expanded "><a href="第八届强网杯_2024_青少年专项赛.html"><strong aria-hidden="true">1.2.</strong> 第八届强网杯青少年专项赛</a></li></ol></li><li class="chapter-item expanded "><a href="wangdingcup/index.html"><strong aria-hidden="true">2.</strong> 网鼎杯</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="wangdingcup/第四届网鼎杯_2024_半决赛.html"><strong aria-hidden="true">2.1.</strong> 第四届网鼎杯半决赛</a></li></ol></li><li class="chapter-item expanded "><a href="longjiancup/index.html"><strong aria-hidden="true">3.</strong> 陇剑杯</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="longjiancup/2023/第二届陇剑杯网络安全大赛_2023_线上预选赛.html"><strong aria-hidden="true">3.1.</strong> 第二届陇剑杯线上预选赛</a></li></ol></li><li class="chapter-item expanded "><a href="ciscn/index.html"><strong aria-hidden="true">4.</strong> CISCN</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ciscn/18th/全国大学生信息安全竞赛创新实践能力赛_2025_初赛.html"><strong aria-hidden="true">4.1.</strong> 第十八届全国大学生信息安全竞赛（创新实践能力赛）线上初赛</a></li></ol></li><li class="chapter-item expanded "><a href="iscc/index.html"><strong aria-hidden="true">5.</strong> ISCC</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="iscc/iscc_2025.html"><strong aria-hidden="true">5.1.</strong> ISCC 2025</a></li><li class="chapter-item expanded "><a href="iscc/iscc_2024.html"><strong aria-hidden="true">5.2.</strong> ISCC 2024</a></li><li class="chapter-item expanded "><a href="iscc/iscc_2023.html"><strong aria-hidden="true">5.3.</strong> ISCC 2023</a></li><li class="chapter-item expanded "><a href="iscc/iscc_2022.html"><strong aria-hidden="true">5.4.</strong> ISCC 2022</a></li></ol></li><li class="chapter-item expanded "><a href="能源网络安全大赛/index.html"><strong aria-hidden="true">6.</strong> 能源网络安全大赛</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="能源网络安全大赛/能源网络安全大赛_2025_Qualifier.html"><strong aria-hidden="true">6.1.</strong> 2025年能源网络安全大赛预赛</a></li><li class="chapter-item expanded "><a href="能源网络安全大赛_2024_团体决赛/index.html"><strong aria-hidden="true">6.2.</strong> 2024年能源网络安全大赛团体决赛</a></li><li class="chapter-item expanded "><a href="能源网络安全大赛_2024_个人决赛/index.html"><strong aria-hidden="true">6.3.</strong> 2024年能源网络安全大赛个人决赛</a></li><li class="chapter-item expanded "><a href="能源网络安全大赛_2024_Qualifier/index.html"><strong aria-hidden="true">6.4.</strong> 2024年能源网络安全大赛预赛</a></li></ol></li><li class="chapter-item expanded "><a href="cryptocup/index.html"><strong aria-hidden="true">7.</strong> 熵密杯</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="cryptocup/2025/第三届熵密杯密码安全挑战赛_2025.html"><strong aria-hidden="true">7.1.</strong> 2025年第三届熵密杯密码安全挑战赛</a></li><li class="chapter-item expanded "><a href="cryptocup/2024/第二届熵密杯密码安全挑战赛_2024.html"><strong aria-hidden="true">7.2.</strong> 2024年第二届熵密杯密码安全挑战赛</a></li><li class="chapter-item expanded "><a href="cryptocup/2023/首届熵密杯密码应用安全竞赛_2023.html"><strong aria-hidden="true">7.3.</strong> 2023年首届熵密杯密码应用安全竞赛</a></li></ol></li><li class="chapter-item expanded "><a href="picoCTF/index.html"><strong aria-hidden="true">8.</strong> picoCTF</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="picoCTF/picoCTF_2025.html"><strong aria-hidden="true">8.1.</strong> picoCTF 2025</a></li><li class="chapter-item expanded "><a href="picoCTF/picoCTF_2024.html"><strong aria-hidden="true">8.2.</strong> picoCTF 2024</a></li><li class="chapter-item expanded "><a href="picoCTF/picoCTF_2023.html"><strong aria-hidden="true">8.3.</strong> picoCTF 2023</a></li><li class="chapter-item expanded "><a href="picoCTF/picoCTF_2022.html"><strong aria-hidden="true">8.4.</strong> picoCTF 2022</a></li><li class="chapter-item expanded "><a href="picoCTF/picoCTF_2021.html"><strong aria-hidden="true">8.5.</strong> picoCTF 2021</a></li></ol></li><li class="chapter-item expanded "><a href="HTB/index.html"><strong aria-hidden="true">9.</strong> HTB</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="HTB/Sherlocks/Brutus/index.html"><strong aria-hidden="true">9.1.</strong> Sherlocks Brutus</a></li><li class="chapter-item expanded "><a href="HTB/Sherlocks/Bumblebee/index.html"><strong aria-hidden="true">9.2.</strong> Sherlocks Bumblebee</a></li><li class="chapter-item expanded "><a href="HTB/Sherlocks/Phantom Check/index.html"><strong aria-hidden="true">9.3.</strong> Sherlocks Operation Blackout 2025: Phantom Check</a></li></ol></li><li class="chapter-item expanded "><a href="御网杯/index.html"><strong aria-hidden="true">10.</strong> 御网杯</a></li></ol>';
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
