const questions = [
    {
        question: "一般的にFTP通信で利用されるポート番号はどれ？",
        answer: [
                    "20, 21",
                    "25",
                    "80",
                    "110"
                ],
        correct: "20, 21"
    },
    {
        question: "利用者に関係する情報から推測した候補をパスワードにしてログインを試みる攻撃方式はどれ？",
        answer: [   
                    "総当たり攻撃",
                    "類推攻撃",
                    "レインボー攻撃",
                    "辞書攻撃"
                ],
        correct: "類推攻撃"
    },
    {
        question: "内部のクライアント端末の代わりにインターネットに接続するサービスを提供するサーバーはどれ？",
        answer: [
                    "DHCPサーバー",
                    "DNSサーバー",
                    "PROXYサーバー",
                    "RASサーバー",
                ],
        correct: "PROXYサーバー"
    },
    {
        question: "JavaScriptに静的型付けを追加した拡張言語はどれ？",
        answer: [
                    "Node.js",
                    "Vue.js",
                    "TypeScript",
                    "CoffeeScript",
                ],
        correct: "TypeScript"
    },
    {
        question: "一般的にHTTP通信で利用されるポート番号はどれ？",
        answer: [
                    "20, 21",
                    "25",
                    "80",
                    "110"
                ],
        correct: "80"
    },
    {
        question: "電子メールの転送を実現するクライアントサーバ型のプロトコルはどれ？",
        answer: [
                    "SFTP",
                    "SMTP",
                    "POP",
                    "IMAP"
                ],
        correct: "SMTP"
    },
    {
        question: "一般的にHTTPS通信で利用されるポート番号はどれ？",
        answer: [
                    "25",
                    "80",
                    "110",
                    "443"
                ],
        correct: "443"
    },
    {
        question: "一般的にPOP3通信で利用されるポート番号はどれ？",
        answer: [
                    "23",
                    "25",
                    "110",
                    "443"
                ],
        correct: "110"
    },
    {
        question: "ソーシャルエンジニアリングのうち、ゴミ箱などの廃棄物から情報を入手する手法は？",
        answer: [
                    "ディジタルフォレンジックス",
                    "ショルダーハッキング",
                    "スキャベンジング",
                    "テンペスト"
                ],
        correct: "スキャベンジング"
    },
    {
        question: "アジャイル型開発において、プログラムを書く前にテストケースを作成する手法はどれ？",
        answer: [
                    "SSL",
                    "継続的インテグレーション",
                    "レトロスペクティブ",
                    "テスト駆動開発"
                ],
        correct: "テスト駆動開発"
    },
    {
        question: "SQLインジェクション攻撃について、当てはまらないものはどれ？",
        answer: [
                    "Webサイトの入力欄に不正なSQL文を入力することで不正な処理を実行させる攻撃",
                    "サニタイジングという対策が効果的である",
                    "データの改ざん、情報漏洩に繋がる",
                    "OSやアプリケーションを最新のバージョンに保つことでは対策できない"
                ],
        correct: "OSやアプリケーションを最新のバージョンに保つことでは対策できない"
    },
    {
        question: "サーバーサイドの開発が可能なJavaScriptの実行環境はどれ？",
        answer: [
                    "TypeScript",
                    "Node.js",
                    "Next.js",
                    "Eclipse"
                ],
        correct: "Node.js"
    },
    {
        question: "SQLのDELETE文の正しい構文はどれ？",
        answer: [
                    "delete [テーブル名] where [条件]",
                    "delete from [テーブル名] where [条件]",
                    "delete in [テーブル名] where [条件]",
                    "delete [テーブル名] when [条件]"
                ],
        correct: "delete from [テーブル名] where [条件]"
    },
    {
        question: "動画・音楽のリアルタイム視聴を可能にした方式はどれ？",
        answer: [
                    "ストリーミング",
                    "スクレイピング",
                    "オンデマンド",
                    "ジャミング"
                ],
        correct: "ストリーミング"
    },
    {
        question: "UDPの性質を悪用したDDos攻撃に該当するのはどれ？",
        answer: [
                    "DNSリフレクタ攻撃",
                    "ディレクトリトラバーサル攻撃",
                    "パスワードリスト攻撃",
                    "SQLインジェクション攻撃"
                ],
        correct: "DNSリフレクタ攻撃"
    },
    {
        question: "物理的セキュリティ対策として当てはまらないものはどれ？",
        answer: [
                    "耐震耐火設備の導入",
                    "システムの二重化、バックアップ",
                    "機器処分時の記憶装置の破壊",
                    "セキュリティインシデント発生時の対応マニュアル作成"
                ],
        correct: "セキュリティインシデント発生時の対応マニュアル作成"
    },
    {
        question: "アジャイル型開発におけるレトロスペクティブで意識すべきことはどれ？",
        answer: [
                    "コードだけでなく、動作環境も含めたテストを実施する必要がある",
                    "チームがプラクティスを実施・改善でき、自立することを目標とする",
                    "意見が出ない・発言者が偏るなどを防ぐために、発言しやすい場を作る",
                    "高い生産性を維持できるように、持続可能なペースを保って開発を行う"
                ],
        correct: "意見が出ない・発言者が偏るなどを防ぐために、発言しやすい場を作る。"
    },
    {
        question: "インシデントの調査やシステム監査に利用できる、証拠を収集し保全する技法はどれ？",
        answer: [
                    "コンティンジェンシープラン",
                    "サンプリング",
                    "デジタルフォレンジックス",
                    "ベンチマーキング"
                ],
        correct: "デジタルフォレンジックス"
    },
    {
        question: "PKI(公開鍵基盤)の認証局が果たす役割はどれ？",
        answer: [
                    "共通鍵を生成する",
                    "公開鍵を利用しデータの暗号化を行う",
                    "失効したデジタル証明書の一覧を発行する",
                    "データが改ざんされていないことを検証する"
                ],
        correct: "失効したデジタル証明書の一覧を発行する"
    },
    {
        question: "無線LANを利用するとき、セキュリティ方式としてWPA2(Wi-Fi Protected Access2)を選択することで利用される暗号化アルゴリズムはどれ？",
        answer: [
                    "AES",
                    "ECC",
                    "RC4",
                    "RSA"
                ],
        correct: "AES"
    } 
]