<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import InputContainer from "@/components/InputContainer.vue";
import OAuthButton from "@/components/OAuthButton.vue";

import TelegramLogo from "@/assets/telegram-logo.svg";
import VkLogo from "@/assets/vk-logo.svg";
import YandexLogo from "@/assets/yandex-logo.svg";

const email = ref("");
const password = ref("");
const error = ref("");
const rememberMe = ref(true);

// // Навигация
const router = useRouter();

function logIn() {
    router.push("/");
}

// // Регулярное выражение для проверки email
// const validateEmail = (email) => {
//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return emailPattern.test(email);
// };

// // Обработчик изменения "Запомнить меня"
// const handleRememberMeChange = () => {
//     rememberMe.value = !rememberMe.value;
//     console.log(rememberMe.value);
// };

// // Логика входа
// const logIn = async (e) => {
//     e.preventDefault();

//     if (!validateEmail(email.value)) {
//         error.value = "Введите корректный адрес e-mail.";
//         return;
//     }

//     try {
//         const { data, error: loginError } =
//             await supabase.auth.signInWithPassword({
//                 email: email.value,
//                 password: password.value,
//             });

//         if (loginError) {
//             console.error(loginError);
//             error.value = "Неверное имя пользователя или пароль";
//             return;
//         }

//         console.log(data);
//         email.value = "";
//         password.value = "";
//         error.value = "";
//         router.push("/");
//     } catch (err) {
//         console.error(err);
//         error.value = "Произошла ошибка при входе";
//     }
// };
</script>

<template>
    <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div class="p-6 m-6 bg-white shadow-lg rounded-xl">
            <img class="w-24 mx-auto mb-4" src="@/assets/logo.png" alt="Logo" />
            <h1 class="text-2xl font-semibold text-center mb-4">Вход</h1>

            <!-- Форма входа -->
            <form @submit="logIn" class="space-y-4">
                <!-- Поле Email -->
                <InputContainer
                    v-model="email"
                    type="email"
                    placeholder="Введите ваш email"
                    classes=""
                />
                <!-- Поле Пароль -->
                <InputContainer
                    v-model="password"
                    type="password"
                    placeholder="Введите ваш пароль"
                    classes=""
                />
                <!-- Группа чекбокса и ссылки -->
                <div class="flex items-center justify-between">
                    <label class="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            v-model="rememberMe"
                            class="w-4 h-4 text-blue-500"
                        />
                        <span>Запомнить меня</span>
                    </label>
                    <a
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                        class="text-blue-500 hover:underline"
                    >
                        Забыли пароль?
                    </a>
                </div>

                <!-- Кнопка входа -->

                <button
                    type="submit"
                    class="w-full py-2 text-white bg-blue-300 rounded-xl hover:bg-blue-500"
                    @click="logIn"
                >
                    Войти
                </button>

                <!-- Ошибка -->
                <p v-if="error" class="mt-2 text-sm text-red-500">
                    {{ error }}
                </p>
            </form>

            <!-- Oauth кнопки -->
            <div class="mt-6 text-center">
                <p>Или продолжить с</p>
                <div class="flex justify-evenly mt-4">
                    <OAuthButton :logo="TelegramLogo" alt="Telegram" />
                    <OAuthButton :logo="VkLogo" alt="VK" />
                    <OAuthButton :logo="YandexLogo" alt="Yandex" />
                </div>
            </div>

            <!-- Регистрация -->
            <div class="mt-6 text-center">
                <span>Новый пользователь? </span>
                <router-link to="/" class="text-blue-500 hover:underline">
                    Зарегистрируйся
                </router-link>
            </div>
        </div>
    </div>
</template>
