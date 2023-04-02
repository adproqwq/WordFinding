$(function () {
    var el = document.getElementById('typewriter');
    var data = '[{\"mode\":\"+\",\"content\":\"恭\",\"delay\":0},' +
        '{\"mode\":\"+\",\"content\":\"喜\",\"delay\":196},' +
        '{\"mode\":\"+\",\"content\":\"你\",\"delay\":97},' +
        '{\"mode\":\"+\",\"content\":\"解\",\"delay\":136},' +
        '{\"mode\":\"+\",\"content\":\"密\",\"delay\":241},' +
        '{\"mode\":\"+\",\"content\":\"成\",\"delay\":239},' +
        '{\"mode\":\"+\",\"content\":\"功\",\"delay\":88},' +
        '{\"mode\":\"+\",\"content\":\"，\",\"delay\":152},' +
        '{\"mode\":\"+\",\"content\":\"接\",\"delay\":168},' +
        '{\"mode\":\"+\",\"content\":\"下\",\"delay\":105},' +
        '{\"mode\":\"+\",\"content\":\"来\",\"delay\":143},' +
        '{\"mode\":\"+\",\"content\":\"公\",\"delay\":144},' +
        '{\"mode\":\"+\",\"content\":\"布\",\"delay\":400},' +
        '{\"mode\":\"+\",\"content\":\"神\",\"delay\":168},' +
        '{\"mode\":\"+\",\"content\":\"秘\",\"delay\":137},' +
        '{\"mode\":\"+\",\"content\":\"大\",\"delay\":311},' +
        '{\"mode\":\"+\",\"content\":\"奖\",\"delay\":191},' +
        '{\"mode\":\"+\",\"content\":\"！\",\"delay\":105},' +
        '{\"mode\":\"+\",\"content\":\"来\",\"delay\":416},' +
        '{\"mode\":\"+\",\"content\":\"自\",\"delay\":112},' +
        '{\"mode\":\"+\",\"content\":\"我\",\"delay\":95},' +
        '{\"mode\":\"-\",\"delay\":416},' +
        '{\"mode\":\"+\",\"content\":\"班\",\"delay\":196},' +
        '{\"mode\":\"+\",\"content\":\"主\",\"delay\":206},' +
        '{\"mode\":\"+\",\"content\":\"任\",\"delay\":223},' +
        '{\"mode\":\"+\",\"content\":\"的\",\"delay\":223},' +
        '{\"mode\":\"+\",\"content\":\"拥\",\"delay\":88},' +
        '{\"mode\":\"+\",\"content\":\"抱\",\"delay\":71},' +
        '{\"mode\":\"+\",\"content\":\"！\",\"delay\":223},' +
        '{\"mode\":\"+\",\"content\":\"其\",\"delay\":185},' +
        '{\"mode\":\"+\",\"content\":\"他\",\"delay\":152},' +
        '{\"mode\":\"+\",\"content\":\"人\",\"delay\":96},' +
        '{\"mode\":\"+\",\"content\":\"享\",\"delay\":136},' +
        '{\"mode\":\"+\",\"content\":\"受\",\"delay\":760},' +
        '{\"mode\":\"+\",\"content\":\"不\",\"delay\":176},' +
        '{\"mode\":\"+\",\"content\":\"到\",\"delay\":120},' +
        '{\"mode\":\"+\",\"content\":\"的\",\"delay\":128},' +
        '{\"mode\":\"+\",\"content\":\"哦\",\"delay\":495},' +
        '{\"mode\":\"+\",\"content\":\"！\",\"delay\":80},' +
    //var data = 'json/success.json';
    new TypePlayer(data, function (text) {
        el.innerText = text;
    }, 1.2).play();
});