(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{378:function(s,a,t){"use strict";t.r(a);var e=t(43),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("strong",[t("em",[s._v("NOTE:")])]),s._v(" You DO NOT want to use the v0.1.0 on an existing mainnet validator node. It will not work. "),t("br"),s._v(" "),t("strong",[t("em",[s._v("NOTE 2:")])]),s._v(" We recommend you to first remove older "),t("code",[s._v("enigmachain")]),s._v(" installations to prevent collisions. "),t("br"),s._v(" "),t("strong",[t("em",[s._v("NOTE 3:")])]),s._v(" Before removing, changing or doing anything with the old "),t("code",[s._v("enigmad")]),s._v(","),t("code",[s._v("enigmacli")]),s._v(" installations - make sure to back up your keys and recovery seeds!")]),s._v(" "),t("h2",{attrs:{id:"set-up-a-light-client"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-up-a-light-client"}},[s._v("#")]),s._v(" Set up a light client")]),s._v(" "),t("p",[s._v("For smart contract testing and development, most of you would choose this option.\nYou would do this if you have no interest at all at running a full-node or a validator node on testnet.")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("Get the v0.1.0 pre-release from our repo: https://github.com/enigmampc/SecretNetwork/releases/tag/v0.1.0\n(Currently support is only for Debian/Ubuntu. Other OS distributions coming soon)")])]),s._v(" "),t("li",[t("p",[s._v("Uninstall previous releases:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dpkg -r enigmachain\n")])])])]),s._v(" "),t("li",[t("p",[s._v("Install:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dpkg -i enigma-blockchain_0.1.0_amd64.deb\n")])])])]),s._v(" "),t("li",[t("p",[s._v("Configure the client to point to the testnet nodes:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("enigmacli config chain-id enigma-testnet\nenigmacli config node tcp://bootstrap.testnet.enigma.co:26657\n")])])])]),s._v(" "),t("li",[t("p",[s._v("Check installation:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("enigmacli status\n")])])])])]),s._v(" "),t("h2",{attrs:{id:"use-smart-contracts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-smart-contracts"}},[s._v("#")]),s._v(" Use smart contracts")]),s._v(" "),t("p",[s._v("The smart contracts module we embedded into enigma-blockchain is called "),t("code",[s._v("compute")]),s._v(".\nrun "),t("code",[s._v("enigmacli tx compute --help")]),s._v(" for more info.")]),s._v(" "),t("p",[s._v("Smart Contracts docs will be posted soon, in the meantime you should check out "),t("a",{attrs:{href:"https://github.com/confio/cosmwasm",target:"_blank",rel:"noopener noreferrer"}},[s._v("CosmWasm's docs"),t("OutboundLink")],1),s._v(" for info about writing and deploying smart contracts.")]),s._v(" "),t("h2",{attrs:{id:"get-some-testnet-scrt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-some-testnet-scrt"}},[s._v("#")]),s._v(" Get some Testnet-SCRT")]),s._v(" "),t("p",[s._v("Please don't abuse this service—the number of available tokens is limited.")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("Head to https://faucet.testnet.enigma.co .")])]),s._v(" "),t("li",[t("p",[s._v("Generate a key-pair:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("enigmacli keys "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("your-key-name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("Fill in your address and press "),t("code",[s._v("Send me tokens")]),s._v(".")])])]),s._v(" "),t("p",[t("strong",[t("em",[s._v("NOTE:")])]),s._v(" You can, technically, use the same address as your mainnet address, although "),t("strong",[s._v("we strongly recommend against it to avoid confusions!")]),s._v(" Just create another key with unmistakable name like "),t("code",[s._v("testnet-tom")]),s._v(" for example.")]),s._v(" "),t("h2",{attrs:{id:"run-a-full-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-a-full-node"}},[s._v("#")]),s._v(" Run a full node")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("Run steps 1-3 of the previous section (light client guide) on your server.")])]),s._v(" "),t("li",[t("p",[s._v("Initialize your installation of the Secret Network. Choose a  "),t("strong",[s._v("moniker")]),s._v("  for yourself that will be public, and replace  "),t("code",[s._v("<MONIKER>")]),s._v("  with your moniker below")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("enigmad init "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("MONIKER"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --chain-id enigma-testnet\n")])])])]),s._v(" "),t("li",[t("p",[s._v("Download a copy of the genesis file:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -O ~/.enigmad/config/genesis.json "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://raw.githubusercontent.com/enigmampc/SecretNetwork/master/enigma-testnet-genesis.json"')]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("Validate the checksum of the file:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cc7ab684b955dcc78baffd508530f0a119723836d24153b41d8669f0e4ec3caa '),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v('/.enigmad/config/genesis.json"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" sha256sum --check\n")])])])]),s._v(" "),t("li",[t("p",[s._v("Validate genesis:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("enigmad validate-genesis\n")])])])]),s._v(" "),t("li",[t("p",[s._v("Add the bootstrap node as a persistent peer:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("perl -i -pe "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'s/persistent_peers = ""/persistent_peers = "16e95298703bfbf6565a1cbb6691cf30129f52ca\\@bootstrap.testnet.enigma.co:26656"/\'')]),s._v(" ~/.enigmad/config/config.toml\n")])])])]),s._v(" "),t("li",[t("p",[s._v("Run your node:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" enigma-node\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start enigma-node\n")])])])]),s._v(" "),t("li",[t("p",[s._v("Verify success:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("journalctl -f -u enigma-node\n")])])])])]),s._v(" "),t("p",[s._v("Logs should look similar to this:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Mar 05 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":13:08 ip-172-31-44-28 enigmad"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3083")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": I"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-03-05"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":13:08.623"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Executed block                               "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("module")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("state "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("height")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1920")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("validTxs")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("invalidTxs")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nMar 05 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":13:08 ip-172-31-44-28 enigmad"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3083")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": I"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-03-05"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":13:08.633"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Committed state                              "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("module")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("state "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("height")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1920")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("txs")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("appHash")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("079C94F8198AC7F25BF5CF453F12B56A73816A4D07BA01630D3138A66136B340\nMar 05 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":13:13 ip-172-31-44-28 enigmad"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3083")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": I"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-03-05"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":13:13.698"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Executed block                               "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("module")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("state "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("height")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1921")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("validTxs")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("invalidTxs")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nMar 05 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":13:13 ip-172-31-44-28 enigmad"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3083")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": I"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-03-05"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":13:13.707"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Committed state                              "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("module")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("state "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("height")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1921")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("txs")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("appHash")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1CB9AA6337DCF83F09687965CEF539FD25AA17F5BB8AF520575A891CFB05A178\nMar 05 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":13:18 ip-172-31-44-28 enigmad"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3083")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": I"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-03-05"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":13:18.775"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Executed block                               "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("module")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("state "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("height")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1922")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("validTxs")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("invalidTxs")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nMar 05 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":13:18 ip-172-31-44-28 enigmad"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3083")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": I"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-03-05"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":13:18.784"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Committed state                              "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("module")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("state "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("height")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1922")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("txs")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("appHash")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("E27C56C5F1D3A85E1E75F3882877065B06BACFC5CED8FA401CE066B8FFEDF608\n")])])]),t("p",[s._v("You have an active full node 🎉")])])}),[],!1,null,null,null);a.default=n.exports}}]);