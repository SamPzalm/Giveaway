document.getElementById('joinButton').addEventListener('click', function() {
    // Show the joining screen
    document.getElementById('loadingScreen').style.display = 'none';
    document.getElementById('joiningScreen').style.display = 'block';

    // Redirect to the giveaway page after 2 seconds
    setTimeout(function() {
        window.location.href = 'checkpoint1.html';
    }, 2000);
});
