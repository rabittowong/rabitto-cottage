import { ShikiModel } from '../model/shiki.model';

export const shikiData: ShikiModel[] = [
  {
    name: '夏橘',
    race: '法菈',
    avatar: 'rabitto-shiki1.jpg',
    health: 655,
    attack: 644,
    defense: 612,
    speed: 554,
    regen: 0,
    skill1: '炎蛇',
    skill1Remark: '攻擊時一定機率發動，一回合內攻擊5次',
    skill2: '火焰障壁',
    skill2Remark: '戰鬥開始前發動，敵方全體攻擊力減半',
  },
  {
    name: '小空',
    race: '空狐',
    avatar: 'rabitto-shiki2.jpg',
    health: 673,
    attack: 606,
    defense: 636,
    speed: 579,
    regen: 0,
    skill1: '憑依亂舞',
    skill1Remark: '一定機率連續行動3次',
    skill2: '鐵壁',
    skill2Remark: '受到傷害時，一定機率傷害變0',
  },
  {
    name: '葉月',
    race: '木葉姬',
    avatar: 'rabitto-shiki3.jpg',
    health: 507,
    attack: 580,
    defense: 415,
    speed: 626,
    regen: 0,
    skill1: '魅惑的一箭',
    skill1Remark: '攻擊時一定機率讓敵方陷入魅惑狀態，使敵方無法攻擊',
    skill2: '五月雨',
    skill2Remark: '攻擊時一定機率發動全體攻擊',
  },
  {
    name: '桃子',
    race: '紫君',
    avatar: 'rabitto-shiki4.jpg',
    health: 563,
    attack: 509,
    defense: 479,
    speed: 558,
    regen: 79,
    skill1: '月之加護',
    skill1Remark: '我方受到傷害時，一定機率傷害變0',
    skill2: '痊癒之光',
    skill2Remark: '回復時，一定機率全回復',
  },
];
