<?php
/**
 * @file
 * Template for carousel item.
 *
 * @var object $collection
 */
?>
<li class="rs-carousel-item">
  <a href="search/ting/<?php echo $collection->id; ?>" title="<?php print check_plain($collection->creator); ?>: <?php print check_plain($collection->title); ?>">
    <img src="<?php echo $collection->image; ?>" alt="<?php print $collection->alt; ?>"/>
    <div class="info">
      <span class="title"><?php print truncate_utf8(check_plain($collection->title), 25, FALSE, TRUE); ?></span>
    </div>
  </a>
</li>
