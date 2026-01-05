import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    server: {
        // 1. Vite가 감시할 호스트 설정
        host: 'develop.tms', 
        // 2. 브라우저에서 접속할 때의 HMR(실시간 반영) 호스트 설정
        hmr: {
            host: 'develop.tms',
        },
        // (선택) 만약 5173 포트가 아닌 80번 포트를 통해 Vite를 통과시키고 싶다면 추가 설정이 필요하지만, 
        // 일반적으로 포트는 5173을 그대로 두고 호스트 이름만 맞추면 됩니다.
    },
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
});
