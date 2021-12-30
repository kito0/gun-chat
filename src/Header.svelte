<script>
    import { username, user} from './user';

    function signout() {
        user.leave();
        username.set('');
    }
</script>

<header>
    <h1>Gun Chat</h1>
    {#if $username}
        <div class="user-bio">
            <span>Hello <strong>{$username}</strong></span>
            <img src={`https://avatars.dicebear.com/api/initials/${username}.svg`} alt="avatar">
        </div>
        <button class="signout-btn" on:click={signout}>Sign Out</button>
    {:else}
        <h3>Gun Chat</h3>
    {/if}
</header>