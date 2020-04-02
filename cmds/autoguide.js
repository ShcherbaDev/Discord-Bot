const Discord = module.require("discord.js");
const fs = require("fs");
const { Client, MessageEmbed } = require('discord.js');
module.exports.run = async (bot, message, args)=>{
    if(args[0] == "классы"){
        if(args[1] == "инфо"){
            /*const embed = new MessageEmbed()
      .setTitle("Confrontation_v.1.0")
      .setColor(0x218457)
      .setDescription("");
            return message.channel.send(embed);*/
            const embed = new MessageEmbed()
      .setTitle("Confrontation_v.1.0")
      .setColor(0x218457)
      .setDescription("Экипировка - вариативные вещи, которыми можно снабдить персонажа. Напротив них описывается эффекты, либо атаки (которые так-же тратят ход), которые они дают.\nАтаки - способности, которые можно использовать во время Вашего хода. Они могут наносить урон, вешать эффекты, блокировать урон и т.д..\nДействия - способности, которые можно использовать во время хода противника. Они, как и атаки, могут наносить урон, вешать эффекты, блокировать урон и т.д.. Их можно использовать после того, как противник выбрал атаку.\nПерки - пассивные способности, которые пассивно могут наносить урон, вешать эффекты, блокировать урон и т.д..\nХарактеристики - количество изначального здоровья (максимального), защиты, манны и её регенерации и описание персонажа.");
            return message.channel.send(embed);
        }
        if(args[1] == "волшебник" || args[1] == "маг"){
            const embed1 = new MessageEmbed()
      .setTitle("Confrontation_v.1.0")
      .setColor(0x218457)
      .setDescription("Волшебник.\n-------------------\nИз экипировки:\nТканая роба. Позволяет пользоваться первым тиром магии.\nПосох с аметистом. \nРуническая книга. Требует зарядки в 2 хода, позволяет следующие 2 хода использовать заклинания любого тира. Тратит 100 маны, 3 кристалла. \nКристаллы х2. Позволяют использовать магию тира 2, не тратят ход. При использовании разрушаются в количестве использованных заклинаний. \nЗелье лечения х3. Тратит ход, лечит на 100хп, поднимает защиту на 20 на 3 хода. \nЗелье манны х3. Полностью заполняют манну, увеличиваю регенерацию манны на 50/ход на 2 хода. Не тратят ход. \n------------------- \nИз атак:\nПоджёг. Накладывает эффект горения на 2 хода. Тратит 25 манны, 1 тир. \nОбморожение. Накладывает эффект 'обледенение' на 1 ход. Тратит 25 манны, 1 тир. \nКристаллизация манны. Тратит 100 манны, создаёт 2 кристалла, 1 тир. \nЛавовый выхлест. Накладывает эффект горение 3 на 2 хода. Тратит 80 манны, 2 тир. \nАбсолютная заморозка. Накладывает эффект обледенения 3 на 1 ход. Тратит 120 манны, 2 тир. \nПодпитка манной. Увеличивает уровень горения и обледенения, висящих на противника до 3 уровня. Увеличивает их продолжительность на 1 ход. Тратит 200 манны, 2 тир. \nБезбожные души. Наносят 250 урона, накладывают дебаффы опустошение морали 3 и ошеломление на один ход. Не сочитаются с заострением. Тратят 250 манны, 3 тир.\nЗачарованный щит вальхаллы. Полностью поглощает урон в течении следующих 3 ходов (трата манны рассчитывается по формуле [суммарный урон] ÷ 5 + 50) . Если манны будет меньше - щит уничтожается. 3 тир. \nПреобразование силы. Действие. За каждые полученные 100 урона создаёт 1 кристалл. Тратит 50 манны, кд 3 хода. \n-------------------\nИз перков:\nАзы алхимии. При нахождении 6+ кристаллов в инвентаре создаёт зелье манны, тратя на него 1 кристалл. Таким образом, максимум в инвентаре может быть 5 кристаллов. \nБолевой обморок. Если за 1 ход получает 100, либо больше урона, то получает ошеломление и сопротивление урону на 50% на 1 ход. \n-------------------\nИз статов:\n600хп.\n0 защиты\n300 манны\n40 манны/ход");
            return message.channel.send(embed1);
        }
        if(args[1] == "лучник"){
            const embed2 = new MessageEmbed()
      .setTitle("Confrontation_v.1.0")
      .setColor(0x218457)
      .setDescription("Лучник:\n------------------- \nИз экипировки:\nЗачарованный лук. После 2 использований в ряд даёт эффект 100%-го уклонения от всех атак на следующем ходу. Тратит 10 манны за удар. \nКинжал х1. \nСеребряная стрела х3. Наносит тройной урон.\nЭльфийское зелье лечения 3х. Тратит ход, лечит на 100хп, поднимает урон на 20.\n------------------- \nИз атак:\nПростая атака. Наносит 50х1 урона. Можно заряжать разными стрелами, 1 тир. \nПронзание. Наносит 10х2 урона кинжалом, вешает кровотечение 3 на 1 ход. \nМеченый выстрел. Стреляет по противнику кинжалом, нанося 100х1 урона, вешая кровотечение 4 и уклонение на 1 ход, 1 тир. \nЛёгкая магия. Даёт 1 стрелу на выбор, либо кинжал тратя 50 манны, либо лечит на 100 хп тратя 100 манны.\nЭльфийская ловкость. Действие. Даёт уклонение от всех ударов во время текущего хода. Тратит 40 манны. Кд 2 хода, 1 тир\nНаколдованные шипы. Действие. Наносит урон в соотношении от потраченной манны и полученному урону (по формуле [суммарный полученный урон без Перка 'хилый'] ÷ 10 × [потраченная манна(10/20/.../90/100) ÷ 10] = [урон, нанесённый атакующему]), блокирует 20% полученного урона. Тратит 10-100 манны. Кд в 3 хода, 1 тир.\n-------------------\nПерки:\nЭльфийское похождение. Даёт эффект уклонения на 1 хода каждые 3 хода. Иммунитет к кровотечению, которое слабее первого уровня. За каждый удар получает по 10% манны от силы удара. Позволяет пользоваться 1 тиром магии. \nВолшебный колчан. После использования трёх обычных ударов достаёт из колчана стрелу, теряя 20 манны. Стрелы собираются в инвентарь. Стрелы бывают таких видов:\n- Серебряная стрела, наносит х3 урона\n- Зачарованная стрела, наносит урон обычной атаки, даёт дебафф ошеломления на 1 ход. \n- Подожженая стрела. Наносит урон обычной атаки, накладывает деббаф горения 3 на 1 ход.].\n Хилый. Получает на 20% больше урона от атак.\n-------------------\nСтаты:\nЭльфийский воин, обученный невероятно сильным атакам и с невероятной ловкостью. Однако в силу своей уверенности и похождения обменял любую защиту на урон, по причине чего является главной мишенью для атакующих.\n400хп\n0 защиты\n160 манны\n20 манны/ход")
            return message.channel.send(embed2);
        }
        if(args[1] == "паладин" || args[1] == "воин"){
            const embed3 = new MessageEmbed()
      .setTitle("Confrontation_v.1.0")
      .setColor(0x218457)
      .setDescription("Паладин.\n------------------- \nИз экипировки:\nВольфрамовые рыцарские доспехи. \nСтандартный меч. \nАмулет перевёрнутого креста. Накладывает эффект 'Могущество' после успешной атаки по врагу. Артефакт нежити. \nОбледенелая сфера. Накладывает эффект 'Обледенение' 3 уровня на 1 ход. Тратит ход, кд 4 хода. \nЗелье лечения 3х. Тратит ход, лечит на 100хп, поднимает защиту на 20 на 3 хода.\n------------------- \nИз атак:\nУдар мечём на 20х2 урона.\nПрохлада и кодекс. Наносит 50 урона, вешая на противника эффект обледенения 1 на 1 ход. Требует зарядки в 2 хода. \nВихревой удар. Наносит 100 урона, вешает на Вас эффект ошеломления на 1 ход. Кд 3 хода. \nБросок бумерангом. Вешает эффект ошеломления на врага на 1 ход, нанося 10 урона, бросая свой щит во врагов. Кд 3 хода. \nЯрость. Увеличивает урон в следующем ходу на 250%.Тратит ход. Можно на следующий ход повторно использовать, что-бы увеличить урон до 500%,однако в таком случае появляется кд в 3 хода. \nТаран. Действие. Наносит 25 урона. Кд 3 хода. \nБлокировка. Действие. Блокирует 80% урона, полученного от ударов врага. Каждое последующее использование уменьшает силу блокировки на 10%. Максимум можно снизить до 40% блокировки. Кд 2 хода.\n------------------- \nПерки:\nСвященный кованный вольфрам. Полностью блокирует урон от атаки в ходу, если её урон меньше, чем 25. Начинает действовать если уровень хп опуститься до 1/4 (200 хп и меньше). \nСеверная выдержка. Эффект 'обдеденение' уменьшает на половину меньше атаки. Пример - обледенение 1 (-60%атк&+60%защ, в нашем случае -30%атк&+60%защ)\n------------------- \nСтаты:\n750 здоровья\n15 защиты. \n100 манны. \n10 манны/сек.");
            return message.channel.send(embed3);
        }
        if(args[1] == "мечник"){
            const embed4 = new MessageEmbed()
      .setTitle("Confrontation_v.1.0")
      .setColor(0x218457)
      .setDescription("Мечник.\n-------------------\nИз экипировки:\nЧёрный змееподобный плащ. Увеличивает наносимый урон в полтора раза, если в прошлом ходу вы пользовались той-же атакой. На третий ход наносимый урон снижен на 80%.\nСтандартный меч. \nСокрушитель. Его атаки нужно заряжать ход, для того, чтобы на ход исполнения атаки убрать у противника способность действовать. \nЗелье лечения 3х. Тратит ход, лечит на 100хп, поднимает защиту на 20 на 3 хода. \n------------------- \nИз атак:\nМечепад. Наносит 10х7 урона.\nНапрыг сзади. Наносит 30 урона, игнорируя показатели, броню, эффект уклонения. Если у цели 1/3 максимального хп (уменьшение в 2 раза от Праха Повелителя учитывается) наносит в три раза больше урона. \nПризматическая невидимость. Накладывает эффект уклонения на 1 ход. Кд - 3 хода. \nИзбавление. Наносит 100 урона. Используется только Сокрушителем. При третьей повторной атаке этой способностью урон не снижается на 80%, а повышается на 200%.\nОслепление протагонистского разума. Наносит Вам 40 урона, вешает на Вас кровотечение 1 на 2 хода. Накладывает ошеломление на врага на 1 ход. \nНе прошедшая месть. Действие. Вы ещё раз пользуетесь той способностью, которую вы использовали во время вашего хода, однако нанося лишь 25% урона. Эффект увеличения урона от змеиного плаща не учитывается, в отличии от понижения. Кд - 4 хода.\nСкрещёные мечи. Действие. Блокирует 40% получаемого урона. Можно использовать во время вражеского хода, кд - 2 хода. \n-------------------\nИз перков:\nИзучение. При третьей атаке того же противника той-же одинаковыми атаками на него вешается кровотечение 1 на 3 хода. \nТорговые органы. При использовании зелья лечения Вы получаете сопротивление 50% урона на один ход, вместо 20 защиты на 3 хода. \n------------------- \nИз статов:\nВ поисках добычи и мест для торговли он вынужден был защищаться от рейдеров, тем самым увеличив себе вероятность победы, ведь уже знал множество тактик, коими пользовались захватчики. Торговле это никак не помешало, пусть его и повысили до главного Полководца Южной части мира, коий ныне в разрухе... \n500хп\n0 защиты\n100 манны.\n10 манны/сек.");
            return message.channel.send(embed4);
        }
        const embed5 = new MessageEmbed()
      .setTitle("Confrontation_v.1.0")
      .setColor(0x218457)
      .setDescription("Выберете класс: волшебник, лучник, паладин, мечник или посмотрите информацию в общем - инфо");
            return message.channel.send(embed5);
    }
    if(args[0] == "эффекты"){
        if(args[1] == "кровотечение"){
            const embed6 = new MessageEmbed()
      .setTitle("Confrontation_v.1.0")
      .setColor(0x218457)
      .setDescription("Кровотечение - cнимает по 5хп/ход. Каждый уровень повышает урон/ход на 5. Каждая атака по цели(количество ударов так-же считается), на которой висит кровотечение поднимает его уровень на 1, так-же как и время действия на 1 ход. Если на момент атаки у противника было кровотечение 1 на 5 ходов, его уровень поднимится, ну а продолжительность снизится до 2 ходов. Максимум - 5 уровень = -25хп/ход.");
            return message.channel.send(embed6);
        }
        /*if(args[1] == ""){
            return message.channel.send("")
        }*/
        if(args[1] == "ошеломление"){
            const embed7 = new MessageEmbed()
      .setTitle("Confrontation_v.1.0")
      .setColor(0x218457)
      .setDescription("Ошеломление - оглушает цель на определённое количество ходов, убирая возможность ходить и действовать у цели. При атаке оглушённой цели по ней проходит лишь 50% общего урона.");
            return message.channel.send(embed7);
        }
        if(args[1] == "уклонение"){
            const embed8 = new MessageEmbed()
      .setTitle("Confrontation_v.1.0")
      .setColor(0x218457)
      .setDescription("Уклонение - При получении такого эффекта полностью уклоняется от любых атак. ");
            return message.channel.send(embed8);
        }
        if(args[1] == "горение"){
            const embed9 = new MessageEmbed()
      .setTitle("Confrontation_v.1.0")
      .setColor(0x218457)
      .setDescription("Горение - cнимает по 50хп/ход. Удары эффекта горения так-же увеличивают уровень кровотечения. Каждый уровень добавляет по 25хп/ход. Максимум - 3 уровень = -100хп/ход.");
            return message.channel.send(embed9);
        }
        if(args[1] == "обледенение"){
            const embed10 = new MessageEmbed()
      .setTitle("Confrontation_v.1.0")
      .setColor(0x218457)
      .setDescription("Обледенение - уменьшает урон и увеличивает защиту цели на 60%. При наличии такого эффекта зелья восстанавливают лишь 25% от их характеристик. При атаке цели с этим эффектом его уровень уменьшается на 1. Каждый уровень уменьшает урон и увеличивает защиту цели на 10%. Максимум - 3 уровень = -80% урона & +80% защиты. ");
            return message.channel.send(embed10);
        }
        if(args[1] == "испустошение"){
            const embed11 = new MessageEmbed()
      .setTitle("Confrontation_v.1.0")
      .setColor(0x218457)
      .setDescription("Испустошение морали - уменьшает урон и защиту цели на 10%. Каждый уровень увеличивает уменьшаемый урон и защиту на 5%. Каждый удар нежити накладывает этот эффект на врага на 2 хода, либо-же повышая уровень имеющегося на 1 и продолжая на 1 ход. Максимум - 5 уровень = - 30% урона & защиты. ");
            return message.channel.send(embed11);
        }
        if(args[1] == "могущество"){
            const embed12 = new MessageEmbed()
      .setTitle("Confrontation_v.1.0")
      .setColor(0x218457)
      .setDescription("Могущество - увеличивает защиту на 1 ход (по формуле [урон в этом ходу] ÷ 5 = +защита). Доступно ношением перевёрнутого креста.");
            return message.channel.send(embed12);
        }
        return message.channel.send("Выберете эффект: кровотечение, ошеломление, горение, обледенение, испустошение морали, могущество, уклонение")
    }
    if(args[0] == "правила"){
        if(args[1] == "бой"){
            const embed13 = new MessageEmbed()
      .setTitle("Confrontation_v.1.0")
      .setColor(0x218457)
      .setDescription("Бой\nРасписывает ход тот, чей ход сейчас. Действия с противоположной стороны расписываються противоположной стороной. Конец хода озвучивает тот, чей ход после подсчёта хп у обоих, статусных эффектов, кд. Пример:\n(твой ход. \n--------) - игрок 2\n(Начало хода игрока 1.) - пример, в бое не пишется\n(использую обычную атаку. \n20х2) - игрок 1\n(Использую блок. \n-40%) - игрок 2\n(12х2\nУ игрока1 178хп(-24), кд на блоке в 3 хода.) - игрок 1\n(У игрока2 200хп.) - игрок 2\n(твой ход\n-------) - игрок 1");
            return message.channel.send(embed13);
        }
        if(args[1] == "разное"){
            const embed14 = new MessageEmbed()
      .setTitle("Confrontation_v.1.0")
      .setColor(0x218457)
      .setDescription("Разное\nВ бою, эффект с не указанной длительностью имеет продолжительность в один ход. С указанной - указанное количество ходов.");
            return message.channel.send(embed14);
        }
    }
};
module.exports.help = {
    name: "авто"
}