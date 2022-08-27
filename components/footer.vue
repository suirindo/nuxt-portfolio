<template>
    <footer>
        <div>
            <a href="https://www.google.com/"><img src="~/assets/images/github.svg" alt="logo"></a>
            <a href="https://www.google.com/"><img src="~/assets/images/linkedin.svg" alt="logo"></a>
            <a href="https://www.google.com/"><img src="~/assets/images/twitter.svg" alt="logo"></a>
            <a href="https://www.google.com/"><img src="~/assets/images/facebook.svg" alt="logo"></a>
            <hr/>
            <NuxtLink to="/blog"></NuxtLink>
            <NuxtLink to="/contact">Contact</NuxtLink>
            <p>©︎{{new Date().getFullYear() }} Tomohiro Iida </p>

        </div>
    </footer>
</template>