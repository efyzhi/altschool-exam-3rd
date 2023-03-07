<template>
    <h1>login page</h1>
    <form>
        <div class="form-container">
            <label for="username">Username</label>
            <input type="text" placeholder="Enter Username" name="username" required>

            <label for="pword">Password</label>
            <input type="password" placeholder="Enter password" name="pword" required>

            <button type="submit">Login</button>

            <label>
                <input type="checkbox" checked="checked" name="remember"> Remember me 
            </label>
            <div> 
                <p>Forget <router-link to="/forget">password</router-link></p>
            </div>
        </div>
    </form>
    <router-link to="/singUp"></router-link>
</template>

<script>

</script>

<style>

</style>