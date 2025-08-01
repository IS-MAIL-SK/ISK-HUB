<?php
get_header(); ?>

<div class="section">
    <div class="section-header">
        <h2 class="section-title">New Novels</h2>
        <a href="#" class="view-all">See More <i class="fas fa-arrow-right"></i></a>
    </div>

    <div class="novel-grid" id="novel-grid">
        <!-- Novel cards will be populated by JavaScript -->
    </div>
</div>

<div class="section">
    <div class="section-header">
        <h2 class="section-title">Novel Ranking</h2>
        <a href="#" class="view-all">See More <i class="fas fa-arrow-right"></i></a>
    </div>

    <div class="ranking-tabs">
        <button class="tab-btn active" data-period="daily">Daily</button>
        <button class="tab-btn" data-period="weekly">Weekly</button>
        <button class="tab-btn" data-period="monthly">Monthly</button>
    </div>

    <div class="ranking-list" id="ranking-list">
        <!-- Ranking items will be populated by JavaScript -->
    </div>
</div>

<?php get_footer(); ?>
