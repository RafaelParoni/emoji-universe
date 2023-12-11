import './emojis.css';


function Emojis() {

  var Faces = [
    '😀', '😁', '😂', '🤣', '😃', '😎', '😄', '😋', '😋', '😉', '😆',
    '😅', '😍', '😘', '🥰', '😗', '😙', '🥲', '🤔', '🤩', '🤗', '🙂',
    '😚', '🫡', '🤨', '😐', '😑', '😶', '🫥', '😮', '😥', '😣', '😏',
    '🙄', '😶‍🌫️', '🤐', '😯', '😪', '😫', '🥱', '😴', '😒', '🤤', '😝',
    '😜', '😛', '😌', '😛', '😜', '😝', '🤤', '😒', '🫠', '🙃', '🫤',
    '😕', '😔', '😓', '🤑', '😲', '☹️', '🙁', '😖', '😞', '😧', '😦',
    '😭', '😢', '😤', '😟', '😨', '😩', '🤯', '😬', '😮‍💨', '😰', '😵',
    '🤪', '😳', '🥵', '🥶', '😱', '😵‍💫', '🥴', '😠', '😡', '🤬', '😷',
    '😇', '🤧', '🤮', '🤢', '🤕', '🤒', '🥳', '🥸', '🥺', '🥹', '🤠',
    '🤡', '🧐', '🫣', '🤭', '🤫', '🤥', '🤓', '😈', '👿', '👹', '👺',
    '💀', '💩', '🤖', '👾', '👽', '👻', '☠️', '🧞‍♀️', '🧞‍♂️', '🧞', '🧟‍♀️',
    '👥', '👤', '🗣️', '🧌', '🧟', '🧟‍♂️', '🫂', '👁️', '👀', '🦴', '🦷',
    '👅', '🦾', '🫁', '🫀', '🧠', '🫦', '👄', '🦿', '👣', '🤺', '⛷️']
  
  var Animais = ['😺', '😸', '😹', '😻', '😼', '😽', '🙊', '🙉', '🙈', '😾',
    '😿', '🙀', '🐵', '🐶', '🐺', '🐱', '🦁', '🐯', '🐗', '🐷', '🐮', '🦝', '🦊',
    '🦒', '🐭', '🐹', '🐰', '🐻', '🐻‍❄️', '🐨', '🐔', '🦄', '🐴', '🦓', '🐸', '🐼',
    '🐲', '🐽', '🐾', '🐒', '🦍', '🦧', '🐈‍⬛', '🐈', '🐕', '🐩', '🐕‍🦺', '🦮', '🐅',
    '🐆', '🐎', '🦌', '🦬', '🦏', '🐏', '🐖', '🐄', '🐃', '🐂', '🦛', '🐑', '🐐', '🐪',
    '🐫', '🦙', '🦘', '🐁', '🦣', '🐘', '🦡', '🦨', '🦥', '🐀', '🦔', '🐇', '🐿️', '🦫', '🦎', '🦖',
    '🦕', '🐉', '🐍', '🐢', '🐊', '🦦', '🦈', '🐬', '🦭', '🐳', '🐋', '🐙', '🦑',
    '🦐', '🐡', '🐠', '🐟', '🦞', '🦀', '🐚', '🪸', '🦆', '🐓', '🦩', '🦜', '🦢', '🕊️',
    '🦅', '🦃', '🦚', '🦉', '🦤', '🐦', '🐧', '🐌', '🦋', '🪶', '🦇', '🐣', '🐤',
    '🐥', '🐛', '🦟', '🪰', '🪱', '🦗', '🐜', '🕷️', '🦂', '🐞', '🪲', '🐝', '🪳', '🕸️']
  
  var Nature = ['🌵', '🎄', '🌲', '🌳', '🌴', '🪹', '🪺', '🪵 ', '🌱', ' 🌿 ', '☘️', ' 🍀',
    '🎍 ', '🪴 ', '🎋 ', '🍃 ', '🍂 ', '🍁 ', '🍄 ', '🐚 ', '🪨 ', '🌾 ', '💐', ' 🌷', ' 🪷',
    ' 🌹', ' 🥀', ' 🌺', '🌸', ' 🌼', ' 🌻 ', '🌞 ', '🌝', ' 🌛', ' 🌜', ' 🌚 ', '🌕 ', '🌖',
    '🌗', ' 🌘', ' 🌑', ' 🌒 ', '🌓', ' 🌔', '🌙 ', '🌎', ' 🌍 ', '🌏 ', '🪐 ', '💫', ' ⭐️',
    '🌟 ', '✨ ', '⚡️ ', '☄️ ', '💥 ', '🔥 ', '🌈', '☀️', '🌤️', '⛅️', '☁️', '🌦️', '🌥️', '🌧️',
    '☁️', '⛅', '🌨️', '🌩️', '🌪️', '🌫️', ' ❄️ ', '☃️', ' ⛄️ ', ' 💨 ', '💧 ', '💦 ', '🫧',
    ' ☔️', ' ☂️ ', '🌊']
 
  var Food = ['🍕','🍏',' 🍎',' 🍐',' 🍊',' 🍋',' 🍌',' 🍉',' 🍇 ','🍓 ','🫐',' 🍈 ','🍒',' 🍑',' 🥭',
    ' 🍍',' 🥥',' 🥝',' 🍅',' 🍆 ','🥑 ','🥦','🥬',' 🥒 ','🌶',' 🫑',' 🌽',' 🥕',' 🫒 ','🧄 ','🧅 ','🥔',' 🍠',' 🫘 ','🥐',
    ' 🥯',' 🍞 ','🥖',' 🥨',' 🧀',' 🥚 ','🍳 ','🧈 ','🥞',' 🧇 ','🥓 ','🥩 ','🍗',' 🍖 ','🦴 ','🌭 ','🍔 ','🍟',' 🍕',' 🫓',
    ' 🥪 ','🥙 ','🧆 ','🌮 ','🌯 ','🫔 ','🥗 ','🥘','🫕',' 🥫','🍝','🍜',' 🍲',' 🍛',' 🍣',' 🍱',' 🥟',' 🦪',' 🍤',' 🍙',' 🍚 ',
    '🍘 ','🍥 ','🥠 ','🥮 ','🍢 ','🍡 ','🍧 ','🍨',' 🍦',' 🥧',' 🧁 ','🍰 ','🎂 ','🍮 ','🍭',' 🍬 ','🍫',' 🍿 ','🍩 ','🍪 ','🌰 ',
    '🥜',' 🍯 ','🥛 ','🍼 ','🫖 ','☕️',' 🍵',' 🧃',' 🥤 ','🧋',' 🫙',' 🍶 ','🍺',' 🍻',' 🥂',' 🍷 ','🫗 ','🥃 ','🍸 ','🍹 ','🧉',
    ' 🍾',' 🧊 ','🥄 ','🍴 ','🍽',' 🥣 ','🥡 ','🥢',' 🧂']
  
  var Objects = ['🎞️', '🎟️', '🎫', '🛝', '🎨', '🖼️', '🎭', '🎪', '🎢', '🎡', '🧵', '🪡', '🧶', '🪢', '🛒',
      '👓', '👔', '🧦', '🧥', '🧤', '🥼', '🧣', '🩳', '🥽', '🦺', '🕶️', '👕', '👖', '👗', '🥻', '👘', '👚',
      '🩲', '🩱', '🎒', '🛍️', '👝', '👜', '👛', '👙', '🩴', '👞', '👟', '🥾', '🥿', '👠', '👡', '👢', '🩰',
      '👑', '🧢', '🪖', '⛑️', '👒', '🎩', '🎓', '💋', '💄', '💍', '💎', '⚽', '⚾', '🥎', '🏀', '🏐', '🏈',
      '🏉', '🎱', '🎳','🥌','⛳','⛸️','🎣','🤿','🎽','🛶','🎿','🛷','🥅','🏒','🥍','🏏','🏑','🏓','🏸','🥏',
      '🎾','🪁','🎯','🥊','🥋','🥇','🥈','🥉','🏅','🎖️','🏆','🎮','🎰','🕹️','🎲','🔮','🪄','🧿','🪬','🧩',
      '🪅','🪩','🪆','🪀','🎴','🃏','🀄','♟️','♠️','♣️','♥️','♦️','🔈','🔉','🔊','📢','📣','🔔','🎼','🎵','🎶',
      '🎙️','🎤','🎚️','🎛️','🎧','📯','🥁','🪘','🎷','🪗','🎺','🎸','🪕','🎻','🎹','📻','🔒','🔓','🔏','🔐',
      '🔑','🗝️','🪓','🔨','⛏️','⚒️','🛠️','🔧','🪛','🔩','🧱','🪨','🪵','🛖','⚙️','🗜️','🛢️','⚗️','🧪','🧫',
      '🧬','🩺','🩸','🩹','🩼','💊','🔬','🔭','⚖️','📿','🔗','⛓️','🪝','🧰','🧲','🪜','🦯','🛡️','🪚','🏹',
      '🗡️','⚔️','🔪','🫙','💣','🔫','🪃','☎️','📟','📠','📱','📲','📳','📴','♂️','♀️','⚧️','🪧','🗿','⚱️','⚰️',
      '🚬','🪪','🔋','🪫','🔌','💻','🖥️','💾','💽','🖲️','🖱️','⌨️','🖨️','💿','📀','🧮','🎥','🎬','📽️','📼',
      '📹','📸','📷','📺','📡','🔍','🔎','🕯️','🪔','💡','🔦','📘','📗','📖','📕','📔','🏮','📙','📚','📓',
      '📒','📃','📜','🏷️','🔖','🗞️','📰','📑','📄','💰','🪙','💴','💵','💶','💷','📧','✉️','🏧','🧾','💳',
      '💸','📨','📩','📤','📥','📦','📫','✏️','🗳️','📮','📭','📬','📪','✒️','🖋️','🖊️','🖌️','🖍️','📝','📅',
      '🗂️','📂','📁','💼','🗒️','🗒️','🗓️','📇','📉','📊','📈','📏','🖇️','📎','📍','📌','📋','📐','✂️','🗃️',
      '🗄️','🗑️','⌛','🕰️','⏲️','⏱️','⏰','⌚','⏳']
  
  var Commemorations = ['🎇', '🎈', '🎆', '🎇', '🧨', '✨', '🎉',
      '🎊', '🎃', '🎄', '🎋', '🎍', '🎎', '🎁', '🎀', '🧧',
      '🎑', '🎐', '🎏', '🎗️', '🎪']
 
  var Transportation = ['🚗','🚕',' 🚙',' 🚌',' 🚎 ','🏎 ','🚓',' 🚑',' 🚒',' 🚐',' 🛻',' 🚚',' 🚛 ','🚜',
      ' 🦯',' 🦽',' 🦼',' 🛴',' 🚲',' 🛵',' 🏍',' 🛺 ','🚨',' 🚔 ','🚍',' 🚘 ','🚖 ','🛞',' 🚡',' 🚠',' 🚟 ',
      '🚃 ','🚋',' 🚞',' 🚝',' 🚄 ','🚅 ','🚈',' 🚂 ','🚆',' 🚇 ','🚊',' 🚉',' ✈️',' 🛫',' 🛬',' 🛩',' 💺',
      ' 🛰',' 🚀',' 🛸',' 🚁',' 🛶',' ⛵️',' 🚤',' 🛥',' 🛳',' ⛴ ','🚢',' ⚓️',' 🛟',' 🪝',' ⛽️',' 🚧',' 🚦 ','🚥',
      ' 🚏']
  
  var Locations = ['🗺 ','🗿',' 🗽',' 🗼',' 🏰',' 🏯',' 🏟',' 🎡 ','🎢 ','🛝',' 🎠',' ⛲️',' ⛱',' 🏖 ','🏝',' 🏜 ','🌋',
     '⛰',' 🏔 ','🗻',' 🏕 ','⛺️ ','🛖','🏠',' 🏡',' 🏘',' 🏚',' 🏗',' 🏭',' 🏢',' 🏬 ','🏣',' 🏤',' 🏥',' 🏦 ','🏨',
     ' 🏪',' 🏫 ','🏩 ','💒',' 🏛 ','⛪️',' 🕌 ','🕍 ','🛕 ','🕋 ','⛩',' 🛤 ','🛣 ','🗾',' 🎑',' 🏞',' 🌅',' 🌄',
     ' 🌠',' 🎇',' 🎆',' 🌇 ','🌆',' 🏙',' 🌃 ','🌌',' 🌉',' 🌁']

  var Symbols = ['❤️',' 🩷',' 🧡 ','💛',' 💚',' 💙 ','🩵',' 💜',' 🖤',' 🩶',' 🤍',' 🤎 ','❤️‍🔥',' ❤️‍🩹 ','💔',' ❣️',' 💕 ',
     '💞',' 💓 ','💗',' 💖',' 💘',' 💝',' 💟',' ☮️',' ✝️ ','☪️ ','🪯 ','🕉 ','☸️',' ✡️','🔯 ','🕎 ','☯️ ','☦️',' 🛐',
     ' ⛎ ','♈️',' ♉️','♊️ ','♋️ ','♌️ ','♍️ ','♎️',' ♏️ ','♐️ ','♑️ ','♒️ ','♓️ ','🆔 ','⚛️',' 🉑',' ☢️',' ☣️',
     ' 📴 ','📳',' 🈶',' 🈚️',' 🈸',' 🈺',' 🈷️',' ✴️',' 🆚',' 💮',' 🉐 ','㊙️ ','㊗️ ','🈴',' 🈵 ','🈹 ','🈲 ','🅰️ ',
     '🅱️ ','🆎',' 🆑 ','🅾️ ','🆘 ','❌ ','⭕️',' 🛑',' ⛔️',' 📛',' 🚫 ','💯 ','💢',' ♨️',' 🚷 ','🚯 ','🚳 ','🚱 ',
     '🔞 ','📵',' 🚭 ','❗️','❓','❔ ','‼️ ','⁉️ ','🔅',' 🔆',' 〽️ ','⚠️',' 🚸',' 🔱 ','⚜️ ','🔰 ','♻️ ','✅ ','🈯️ ',
     '💹 ','❇️ ','✳️ ','❎',' 🌐 ','💠',' Ⓜ️',' 🌀',' 💤',' 🏧',' 🚾 ','♿️ ','🅿️',' 🛗',' 🈳',' 🈂️ ','🛂 ','🛃 ',
     '🛄',' 🛅',' 🚹',' 🚺',' 🚼 ','⚧ ','🚻 ','🚮 ','🎦',' 🛜',' 📶',' 🈁',' 🔣',' ℹ️ ','🔤 ','🔡 ','🔠 ','🆖',' 🆗 ',
     '🆙 ','🆒 ','🆕',' 🆓',' 0️⃣','1️⃣ ','2️⃣',' 3️⃣ ','4️⃣ ','5️⃣ ','6️⃣ ','7️⃣ ','8️⃣',' 9️⃣',' 🔟',' 🔢 ','#️⃣ ','*️⃣ ',
     '⏏️ ','▶️ ','⏸ ','⏯ ','⏹ ','⏺ ','⏭ ','⏮',' ⏩',' ⏪ ','⏫ ','⏬ ','◀️',' 🔼 ','🔽 ','➡️ ','⬅️ ','⬆️ ',
     '⬇️',' ↗️',' ↘️ ','↙️ ','↕️',' ↔️ ','↪️ ','↩️ ','⤴️ ','⤵️',' 🔀 ','🔁 ','🔂 ','🔄',' 🔃',' ','🎵 ','🎶',' ➕',
     '➖ ','➗ ','✖️ ','🟰 ','♾ ','💲 ','💱 ','™️ ','©️ ','®️ ','〰️ ','➰',' ➿',' 🔚 ','🔙 ','🔛 ','🔝 ','🔜',
     ' ✔️ ','☑️',' 🔘','🔴',' 🟠',' 🟡 ','🟢 ','🔵 ','🟣 ','⚫️',' ⚪️',' 🟤',' 🔺','🔻','🔸',' 🔹 ','🔶 ','🔷',' 🔳 ',
     '🔲 ','▪️',' ▫️ ','◾️ ','◽️',' ◼️ ','◻️ ','🟥 ','🟧 ','🟨 ','🟩 ','🟦 ','🟪',' ⬛️ ','⬜️ ','🟫 ','🔈 ','🔇 ','🔉 ',
     '🔊 ','🔔 ','🔕 ','📣 ','📢 ','👁‍🗨',' 💬',' 💭',' 🗯',' ♠️',' ♣️',' ♥️',' ♦️',' 🃏',' 🎴 ','🀄️ ','🕐 ','🕑 ','🕒 ',
     '🕓 ','🕔 ','🕕',' 🕖',' 🕗 ','🕘',' 🕙 ','🕚 ','🕛 ','🕜 ','🕝 ','🕞',' 🕟',' 🕠 ','🕡 ','🕢 ','🕣 ','🕤 ',
     '🕥',' 🕦 ','🕧']

  var Signal = ['🤳', '💪', '👃', '🦻', '👂', '🦶', '🦵', '👈', '👉', '☝️', '🫵', '👆', '👇',
     '🫲', '🫱', '🖖', '🫰', '🤞', '✌️', '🫳', '🫴', '🤘', '🤙', '🖐️', '✋', '👊',
     '✊', '👎', '👍', '🤌', '👌', '🤛', '🤜', '🤚', '👋', '🤟', '✍️', '🙏', '🤲',
     '🫶', '🙌', '👐', '👏', '💅']
  var People = ['👩', '👩', '👨', '🧑', '👧', '👦', '🧒', '👨‍🦰', '👩‍🦰', '🧓', '👴',
    '👵', '👶', '🧑‍🦰', '👩‍🦱', '👨‍🦱', '🧑‍🦱', '👩‍🦲', '👨‍🦲', '👱‍♂️', '👱‍♀️', '🧑‍🦳', '👨‍🦳', '👩‍🦳',
    '🧑‍🦲', '👱', '👸', '🤴', '🫅', '👳‍♀️', '👳‍♂️', '👼', '🧔‍♀️', '🧔‍♂️', '🧔', '👲', '👳',
    '🤶', '🎅', '🧑‍🎄', '👮‍♀️', '👮‍♂️', '👮', '💂', '💂‍♂️', '💂‍♀️', '🕵️', '🕵️‍♂️', '🕵️‍♀️', '🥷',
    '👷‍♀️', '👷‍♂️', '👷', '👩‍⚕️', '👨‍⚕️', '👨‍🏫', '👩‍🏫', '🧑‍🎓', '👨‍🎓', '👩‍🎓', '🧑‍⚕️', '🧑‍🏫', '👩‍⚖️',
    '👨‍⚖️', '🧑‍⚖️', '👩‍🌾', '👨‍🌾', '👨‍🔧', '👩‍🔧', '🧑‍🍳', '👨‍🍳', '👩‍🍳', '🧑‍🌾', '🧑‍🔧', '👩‍🏭', '👨‍🏭',
    '🧑‍🏭', '👩‍💼', '👨‍💼', '👨‍💻', '👩‍💻', '🧑‍🔬', '👨‍🔬', '👩‍🔬', '🧑‍💼', '🧑‍💻', '👩‍🎤', '👨‍🎤', '🧑‍🎤',
    '👩‍🎨', '👨‍🎨', '👨‍🚀', '👩‍🚀', '🧑‍✈️', '👨‍✈️', '👩‍✈️', '🧑‍🎨', '👰‍♂️', '🧑‍🚀', '👩‍🚒', '👰', '👨‍🚒',
    '🤵‍♀️', '🤵‍♂️', '🧑‍🚒', '🧕', '🤵', '🤱', '👰‍♀️', '🫄', '🫃', '🤰', '🧑‍🍼', '👨‍🍼', '👩‍🍼',
    '🦸‍♀️', '🦸‍♂️', '🦸', '🦹‍♀️', '🦹‍♂️', '🦹', '🧚', '🧚‍♀️', '🧚‍♂️', '🧙', '🧙‍♂️', '🧙‍♀️', '🧛‍♀️',
    '🧛‍♂️', '🧛', '🧜‍♀️', '🧜‍♂️', '🧜', '🙍', '🙍‍♂️', '🙍‍♀️', '🧝', '🧝‍♂️', '🧝‍♀️', '🙎‍♀️', '🙎‍♂️',
    '🙎', '🙅‍♀️', '🙅‍♂️', '🙅', '🧏', '🧏‍♂️', '🧏‍♀️', '🙆', '🙆‍♂️', '🙆‍♀️', '💁‍♀️', '💁‍♂️', '💁',
    '🙋‍♀️', '🙋‍♂️', '🙋', '🤦', '🤦‍♂️', '🤦‍♀️', '🙇', '🙇‍♂️', '🙇‍♀️', '🤷‍♀️', '🤷‍♂️', '🤷', '💆‍♀️',
    '💆‍♂️', '💆', '🧖', '🧖‍♂️', '🧖‍♀️', '💇', '💇‍♂️', '💇‍♀️', '🤹‍♀️', '🤹‍♂️', '🤹', '👩‍🦽', '👨‍🦽',
    '🧑‍🦽', '🧑‍🦯', '👨‍🦯', '👩‍🦯', '🧑‍🦼', '👨‍🦼', '👩‍🦼', '🧎‍♀️', '🧎‍♂️', '🧎', '🧍‍♀️', '🧍‍♂️', '🧍',
    '🏃', '🏃‍♂️', '🏃‍♀️', '🚶', '🚶‍♂️', '🚶‍♀️', '💃', '🕺', '🧗‍♀️', '🧗‍♂️', '🧗', '🧘‍♀️', '🏇',
    '🕴️', '🛌', '🛀', '🧘', '🧘‍♂️', '🏂', '🏌️‍♀️', '🏌️‍♂️', '🏌️', '🏄‍♀', '🏄‍♂️', '🏊‍♂️', '🏊‍♀️',
    '🚣', '🚣‍♂️', '🚣‍♀️', '🏄', '🏊', '🤽‍♀️', '🤽‍♂️', '🤽', '🤾‍♀️', '🤾‍♂️', '🏋️‍♂️', '🏋️‍♀️', '⛹️',
    '⛹️‍♂️', '⛹️‍♀️', '🤾', '🏋️', '🚴‍♀️', '🚴‍♂️', '🚴', '🚵‍♀️', '🚵‍♂️', '🤸', '🤸‍♂️', '🤸‍♀️', '🚵',
    '🤼‍♀️', '🤼‍♂️', '🤼', '👯‍♀️', '👯', '👯‍♂️', '💑', '💏', '👪', '👨‍👩‍👧‍👦', '👩‍👦', '👩‍👧‍👦', '🧑‍🤝‍🧑']

  function DisplayEmoji({emoji}){
    return (
      <button onClick={()=> copyEmoji(emoji)}>{emoji}</button>
    )
  }

  var langs = {
    pt: {
        'AlertMsg': 'Não é possivel copiar pois sua conexão com o website não é segura!',
        'CopyMsg': 'Emoji copiado: ',
        'Carinhas': 'Carinhas',
        'Aniamis': 'Animais',
        'Pessoas': 'Pessoas',
        'Comidas': 'Comidas',
        'Plantas': 'Natureza',
        'Comemorações': 'Comemorações',
        'Objetos': 'Objetos',
        'Transporte': 'Transporte',
        'Locais': 'Locais',
        'Símbolos': 'Símbolos',
        'Signal': 'Sinais',
  
    },
    en: {
        'AlertMsg': 'It is not possible to copy it because your connection to the website is not secure! ',
        'CopyMsg': 'Emoji copied: ',
        'Carinhas': 'Faces',
        'Aniamis': 'Animals',
        'Pessoas': 'People',
        'Comidas': 'Foods',
        'Plantas': 'Nature',
        'Comemorações': 'Commemorations',
        'Objetos': 'Objetos',
        'TransporteLocais': 'Transportation',
        'Locais': 'Locais',
        'Símbolos': 'Symbols',
        'Signal': 'Signal',
  
    },
    es: {
        'AlertMsg': '¡No es posible copiarlo porque su conexión al sitio web no es segura!',
        'CopyMsg': 'Emoji copiado: ',
        'Carinhas': 'Rostros',
        'Aniamis': 'Animales',
        'Pessoas': 'Gente',
        'Comidas': 'Comidas',
        'Plantas': 'Naturaleza',
        'Comemorações': 'Commemorations',
        'Objetos': 'Objetos',
        'Transporte': 'Transporte',
        'Locais': 'Ubicaciones',
        'Símbolos': 'Símbolos',
        'Signal': 'Señal',
    }
}

var lang = {}

async function setLang(){
    var langSeletc = window.localStorage.getItem('lang')

    switch(langSeletc){
        case 'pt':
            lang = langs.pt
        break
        case 'es':
            lang = langs.es
        break
        default: 
            lang = langs.en
        break
    }
}
setLang()


  function copyEmoji(emoji){
    console.log(window.isSecureContext)
    const noti = document.createElement("div");
    noti.className = 'notifcation'
    noti.id = emoji

    if(!window.isSecureContext){
      noti.innerHTML = "<span>" + lang.AlertMsg + "</span>";
    }else{
      navigator.clipboard.writeText(' ' + emoji + '')
      noti.innerHTML = "<span> " + lang.CopyMsg + "</span> <span id='emojiCopyDispley'> "+ emoji +" </span>";
    }

    document.getElementById('notifcation').appendChild(noti);

    setTimeout(function(){
      document.getElementById(emoji).remove()
    },6000)
  }

  return (
    <>
      <main className='emoji-main'>
        <h2 id='faces&Animais'> 😀 {lang.Carinhas}</h2>
        <div className='emoji-div'>{Faces.map((Faces) => <DisplayEmoji emoji={Faces} />)}</div>
        <h2> 👋 {lang.Signal} </h2>
        <div className='emoji-div'>{Signal.map((Signal) => <DisplayEmoji emoji={Signal} />)}</div>
        <h2> 😺 {lang.Aniamis} </h2>
        <div className='emoji-div'>{Animais.map((Animais) => <DisplayEmoji emoji={Animais} />)}</div>
        <h2 id='people'> 👩 {lang.Pessoas} </h2>
        <div className='emoji-div'>{People.map((People) => <DisplayEmoji emoji={People} />)}</div>
        <h2 id='food&Nature'> 🍕 {lang.Comidas} </h2>
        <div className='emoji-div'>{Food.map((Food) => <DisplayEmoji emoji={Food} />)}</div>
        <h2> 🌵 {lang.Plantas} </h2>
        <div className='emoji-div'>{Nature.map((Nature) => <DisplayEmoji emoji={Nature} />)}</div>
        <h2 id='commemorations&objects'> 🎇 Commemorations </h2>
        <div className='emoji-div'>{Commemorations.map((Commemorations) => <DisplayEmoji emoji={Commemorations} />)}</div>
        <h2> 🕰️ {lang.Objetos} </h2>
        <div className='emoji-div'>{Objects.map((Objects) => <DisplayEmoji emoji={Objects} />)}</div>
        <h2 id='transportation&locations'> 🚗 Transportation </h2>
        <div className='emoji-div'>{Transportation.map((Transportation) => <DisplayEmoji emoji={Transportation} />)}</div>
        <h2> 🗺 {lang.Locais} </h2>
        <div className='emoji-div'>{Locations.map((Locations) => <DisplayEmoji emoji={Locations} />)}</div>
        <h2 id='symbols'> ❤️ {lang.Símbolos} </h2>
        <div className='emoji-div'>{Symbols.map((Symbols) => <DisplayEmoji emoji={Symbols} />)}</div>
    
    
      </main>
      <div className='notification-main' id='notifcation'>

      </div> 
    </>
  );
}

export default Emojis;
