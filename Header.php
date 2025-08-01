<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <!-- Overlay for mobile menu -->
    <div class="overlay" id="overlay"></div>

    <!-- Sidebar -->
    <div class="sidebar" id="sidebar">
        <div class="logo-container">
            <div class="logo">
                <i class="fas fa-book-open"></i>
                <span>ISK-HUB</span>
            </div>
        </div>

        <nav class="nav-links">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'container' => false,
                'items_wrap' => '%3$s',
                'fallback_cb' => function() {
                    echo '<li><a href="' . home_url() . '"><i class="fas fa-home"></i> <span>Home</span></a></li>';
                }
            ));
            ?>
        </nav>

        <div class="divider"></div>

        <div class="language-selector">
            <select id="language-selector">
                <option value="en">English</option>
                <option value="zh">中文</option>
                <option value="ja">日本語</option>
                <option value="ko">한국어</option>
            </select>
        </div>

        <div class="theme-toggle">
            <label>
                <input type="radio" name="theme" value="dark" checked> Dark
            </label>
            <label style="margin-left: 15px;">
                <input type="radio" name="theme" value="light"> Light
            </label>
        </div>

        <div class="discord-section">
            <a href="#">
                <i class="fab fa-discord"></i>
                <span>Join Us on Discord</span>
            </a>
        </div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
        <div class="header">
            <button class="menu-toggle" id="menu-toggle">
                <i class="fas fa-bars"></i>
            </button>

            <div class="search-bar">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Search novels..." id="search-input">
            </div>

            <div class="user-actions">
                <button class="action-btn" id="refresh-btn">
                    <i class="fas fa-sync-alt"></i>
                </button>

                <button class="action-btn notification-badge" id="notification-btn">
                    <i class="fas fa-bell"></i>
                </button>

                <div class="user-profile" id="user-profile">
                    <div class="user-avatar">U</div>
                    <div class="user-name">Username</div>

                    <div class="profile-dropdown" id="profile-dropdown">
                        <div class="profile-header">
                            <div class="user-avatar">U</div>
                            <div class="profile-info">
                                <h3>Username</h3>
                                <p>Level 15 Reader</p>
                            </div>
                        </div>
                        <ul class="profile-links">
                            <li><a href="#"><i class="fas fa-user"></i> Profile</a></li>
                            <li><a href="#"><i class="fas fa-trophy"></i> Perks & Levels</a></li>
                            <li><a href="#"><i class="fas fa-book"></i> My Novel Requests</a></li>
                            <li><a href="#"><i class="fas fa-chart-bar"></i> My Reports</a></li>
                            <li><a href="#"><i class="fas fa-heart"></i> Contributions</a></li>
                            <li class="divider-profile"></li>
                            <li><a href="#" id="logout-btn"><i class="fas fa-sign-out-alt"></i> Sign out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="login-message" id="login-message">
            <p>Login to keep track of where you left off in the novel.</p>
            <button class="login-btn" id="login-btn">Login</button>
        </div>
