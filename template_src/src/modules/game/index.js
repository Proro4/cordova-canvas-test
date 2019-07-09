import {mapGetters, mapActions, mapMutations} from 'vuex';


export default {
    computed: {
        ...mapGetters({
            canvasInfo: `game/canvasInfo`,
        }),
    },
    created() {
        this.canvasConfiguration();
    },
    methods: {
        canvasConfiguration() {
            setTimeout(() => {

                let canvas = document.getElementById('canvas');
                let ctx = canvas.getContext('2d');
                canvas.width = this.canvasInfo.width;
                canvas.height = this.canvasInfo.height;

                ctx.beginPath();
                ctx.moveTo(18, 18);
                ctx.bezierCurveTo(50, 150, 150, 150, 278, 278);
                ctx.moveTo(18, 18);
                ctx.quadraticCurveTo(50, 200, 278, 278);
                ctx.stroke();

                ctx.strokeRect(18, 18, 260, 260);
                ctx.fillStyle = '#af000c'; // меняем цвет клеток

            }, 100);
        }
    }
}