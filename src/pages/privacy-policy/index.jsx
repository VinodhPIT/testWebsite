import React from "react";
import Head from "next/head";

import useTranslation from "next-translate/useTranslation";

import style from "./style.module.css";

export default function Privacy() {

  const { t } = useTranslation();

  return (
<>
    <Head>
    <title>{t("common:privacy-policy.title")}</title>
  </Head>
    <div className={style.mainWrapper}>
      <div className="container">
        

        <h2 className={style.title}>inckd. Datenschutzrichtlinie</h2>

        <p className={style.content}>
          {" "}
          inckd. AG Datenschutzrichtlinie – Gültig ab dem 26.07.2021
        </p>

        <p className={style.content}>
          Diese Datenschutzrichtlinie gilt für die inckd. AG, Lagerstrasse 14,
          8600 Dübendorf, Schweiz impressum(“wir”, “inckd.”). Sie regelt die
          Handhabung der persönlichen Daten die wir von unseren Kunden,
          Mitgliedern, Anbietern und anderen online Nutzern (“Sie”) sammeln,
          sowie der Informationen, die wir automatisch durch Ihre Online-Besuche
          generieren.
        </p>

        <p className={style.content}>
          inckd. behält sich das Recht vor, diese Datenschutzrichtlinie
          jederzeit nach eigenem Ermessen zu ändern. Sie werden über Änderungen
          in geeigneter Weise informiert.
        </p>

        <h2 className={style.title}>
          Wieso sammeln wir Informationen und persönliche Daten?
        </h2>

        <p className={style.content}>
          {" "}
          Wir sammeln Informationen und persönliche Daten um Websites sowie
          unserer Applikation über mobile Geräte, Tablets oder andere
          Programmierschnittstellen (gemeinsam „inckd.-Plattform“ genannt) und
          Services so einheitlich, effizient nutzerfreundlich und sicher wie
          möglich anbieten zu können. Insbesondere sensitive persönliche Daten,
          wie medizinische Informationen, werden nur, falls überhaupt gesammelt,
          um die Gesundheit der Kunden zu schützen und die Services so
          risikofrei wie mögliche anbieten zu können.
        </p>
        <p className={style.content}>
          {" "}
          Wir sammeln Informationen und persönliche Daten insbesondere um:
        </p>

        <ul className={style.listing}>
          <li>unsere vertraglichen Verpflichtungen mit Ihnen zu erfüllen </li>
          <li>
            {" "}
            die Ihre Gesundheit zu schützen (siehe dazu Abschnitt «Insbesondere:
            Sensitive persönliche Daten»
          </li>
          <li>
            unsere Verpflichtungen hinsichtlich unserer Services zu erfüllen
          </li>
          <li>
            Ihnen Informationen bezüglich Services und Aktualisierungen von
            Standardvereinbarungen wie Datenschutzrichtlinien und
            Nutzungsbedingungen zur Verfügung stellen
          </li>
          <li>
            Ihnen Rechnungserinnerungen für Ihre Services zu senden und
            Zahlungen automatisch zu verarbeiten
          </li>
          <li>auf Ihre E-Mails und andere Anfragen zu antworten</li>
          <li>Bewerbungen zu bearbeiten</li>
          <li>
            die Nutzerfreundlichkeit unserer Webseite und Services zu verbessern
          </li>
          <li>unsere Services stetig zu verbessern und zu optimieren</li>
          <li>
            Probleme, Fehler und Sicherheitsrisiken auf der Webseite zu
            diagnostizieren
          </li>
          <li>
            Missbrauch unserer Services, Systeme und inckd.-Plattform und
            rechtswidrige Handlungen durch diese oder mit diesen zu verhindern
          </li>
          <li>die geltenden Gesetze und Bestimmungen einzuhalten</li>
        </ul>

        <p className={style.content}>
          {" "}
          Wenn wir persönlichen Daten von Ihnen anfragen, haben Sie stets die
          Möglichkeit die Weitergabe zu verweigern. Unsere inckd.-Plattform und
          Services erfordern jedoch zwingend die Erfassung gewisser persönlichen
          Daten für die ordnungsgemässe Ausführung und Nutzung der Funktionen
          der Webseite, sowie die sichere Nutzung der Services. Wenn Sie es also
          ablehnen, uns die nötigen persönlichen Daten anzugeben, können Sie die
          Services leider nicht oder nicht vollumfänglich nutzen.
        </p>

        <h4 className={style.title}>
          Welche Arten von persönlichen Daten erfassen wir?
        </h4>

        <p className={style.content}>
          {" "}
          In der Regel erfassen wir, je nach Art des Services oder Nutzung der
          inckd.-Plattform, folgende persönlichen Daten:
        </p>
        <ul className={style.listing}>
          <li>Name, Vorname, Adresse, Telefonnummer, E-Mail-Adresse</li>
          <li>Firmenname und Geschäftsadresse</li>
          <li>SIP-Adresse</li>
          <li>IP-Adresse</li>
          <li>Rechnungs- und Zahlungsinformationen </li>
          <li>
            Informationen zur Ausbildung und Berufserfahrung bei Bewerbungen
          </li>
        </ul>

        <p className={style.content}>
          {" "}
          Wenn Sie unsere inckd.-Plattform besuchen, erfassen wir zusätzlich
          Informationen wie beispielsweise Ihren Geräte- bzw. Browsertyp und
          Ihre Zugriffszeiten.
        </p>

        <h4 className={style.title}>
          Insbesondere: Sensitive persönliche Daten
        </h4>

        <p className={style.content}>
          {" "}
          inckd. ist sich bewusst, dass im Zusammenhang mit den angebotenen
          Services sensitive persönliche Daten gemäss Art. 9 DSGVO verarbeitet
          werden können und hält sich an die gesetzlichen Vorgaben der
          anwendbaren Datenschutzgesetze. Damit die Anbieter die Services
          anbieten können, brauchen sie von ihren Kunden zwingend eine
          Einverständniserklärung, mit sämtlichen länderspezifisch notwendigen
          medizinischen und persönlichen Angaben.
        </p>

        <h4 className={style.title}>
          Die Einverständniserklärung und die darin beinhalteten Daten werden
          ausschliesslich vom Anbieter eingeholt und aufbewahrt und inckd. hat
          keinen Zugang zu diesen Daten.
        </h4>

        <p className={style.content}>
          {" "}
          Wir unternehmen alle verhältnismässig möglichen und gesetzlich
          vorgeschriebenen Schritte um Ihre persönlichen Daten vor Missbrauch,
          Eingriffen und Verlust, sowie vor unberechtigtem Zugriff, Änderung
          oder Offenlegung zu schützen. Dabei unternehmen wir insbesondere
          folgende Massnahmen:
        </p>

        <ul className={style.listing}>
          <li>
            Verschlüsselung sensitiver persönlicher Daten bei Erfassung und
            Weitergabe
          </li>
          <li>Limitierung des Zugangs zu den Büroräumen und Geräten </li>
          <li>
            Limitierung des Zugriffs auf die persönlichen Daten und andere
            Informationen{" "}
          </li>
          <li>
            Limitierung des Zugriffs auf einer strikten ‘need-to-know’ Basis
          </li>
          <li>
            Installation angemessener Sicherheitsmassnahmen wie z.B. Firewalls,
            Anti-Virus
          </li>
          <li>
            Löschung oder Anonymisierung der persönlichen Daten, wenn gesetzlich
            vorgeschrieben oder von Ihnen verlangt (sofern gesetzlich zulässig
            und im Rahmen der Serviceerbringung möglich)
          </li>
          <li>
            Unterzeichnung von Vertraulichkeitserklärungen mit sämtlichen
            Mitarbeitern, Partnern und Dritten (e.g. Subunternehmern), welchen
            wir gegebenenfalls Ihre persönlichen Daten weitergeben{" "}
          </li>
          <li>
            Verschlüsselung Ihrer persönlichen Daten (wo immer möglich), welche
            ausserhalb des EWR verarbeitet werden
          </li>
        </ul>

        <p className={style.content}>
          {" "}
          Diese Liste ist nicht abschliessend. Möchten Sie mehr über die
          Datensicherungsmassnahmen bei inckd. erfahren, dann können Sie
          datasecurity@inckd.com jederzeit kontaktieren.{" "}
        </p>

        <h4 className={style.title}>
          Wie nutzen wir die Informationen und persönlichen Daten?
        </h4>

        <p className={style.content}>
          {" "}
          Wir nutzen Ihre Informationen, persönlichen Daten und Kundenverhalten
          auf inckd.-Plattform generell, um:
        </p>

        <ul className={style.listing}>
          <li>
            Ihnen unsere inckd.-Plattform und Services sicher und angemessen
            anbieten zu können
          </li>
          <li>Ihnen unsere Services überhaupt anbieten zu können</li>
          <li>
            Unsere Services sicher und im Einklang mit gesetzlichen Vorschriften
            anbieten zu können
          </li>
          <li>
            Ihnen Mitteilungen senden zu können, wie beispielsweise bezüglich
            Stand Ihrer Anfrage.
          </li>
          <li>
            Ihnen bei Zahlungserinnerungen zu senden und Zahlungen
            entgegenzunehmen
          </li>
          <li>
            Ihnen die Kommunikation mit uns oder unseren Mitgliedern zu
            ermöglichen
          </li>
          <li>
            unsere (personalisierten) Services fortlaufend anzupassen, zu
            analysieren, zu verbessern und weiter zu entwickeln
          </li>
          <li>
            Betrug, Missbrauch oder andere illegale Aktivitäten zu verhindern
            oder um das geltende Recht einzuhalten
          </li>
          <li>
            die Sicherheit und Integrität unseres Unternehmens, der
            inckd.-Plattform, Web-Apps Services sicherstellen zu können
          </li>
          <li>
            vertraglichen Vereinbarungen zwischen Ihnen und uns nachkommen zu
            können
          </li>
        </ul>

        <p className={style.content}>
          {" "}
          Wir benützen Ihre persönlichen Daten (unter Ausschluss von sensitiven
          persönlichen Daten) ebenfalls, um unser Unternehmen allgemein zu
          betreiben. Dies beinhaltet insbesondere eine Nutzung der persönlichen
          Daten zur Analyse unserer Leistungen über eine gewisse Zeitspanne, zur
          Erfüllung gesetzlicher Vorschriften, zur Entwicklung und Verbesserung
          der Leistungen unserer Angestellten sowie zu internen Recherche
          Zwecken. Sensitive persönliche Daten werden lediglich zur Erfüllung
          gesetzlicher Vorschriften verwendet.
        </p>

        <h4 className={style.title}>
          An wen geben wir die persönlichen Daten gegebenenfalls weiter?
        </h4>

        <p className={style.content}>
          {" "}
          Personenbezogene Daten werden nicht an Dritte weitergegeben, es sei
          denn, dass dies zur Erfüllung des Zwecks der Erhebung der Daten
          notwendig ist, beispielsweise zur Erfüllung vertraglicher Pflichten,
          zur Beantwortung Ihrer Anfragen, für unsere beruflichen oder legitimen
          geschäftlichen Zwecke oder aufgrund gesetzlicher Bestimmungen. An die
          nachfolgend aufgelisteten Dritten werden persönliche Daten, sofern
          zwingend notwendig, zu den oben genannten Zwecken gegebenenfalls
          weitergebeben respektive von ihnen verarbeitet:
        </p>

        <ul className={style.listing}>
          <li>
            <span>Mitarbeiter:</span> Alle Mitarbeiter sind zur Verschwiegenheit
            verpflichtet. Wir bewahren Ihre persönlichen Daten sicher auf und
            halten uns strikt an unsere internen organisatorischen und
            technischen Sicherheitsbestimmungen in Übereinstimmung mit den
            geltenden Datenschutzgesetzen.{" "}
          </li>

          <li>
            <span>Verbundene Unternehmen: </span>Die Beziehung und der Umgang
            mit personenbezogenen Daten werden durch gruppeninterne Verträge
            geregelt, welche die Einhaltung der gesetzlichen Anforderungen der
            anwendbaren Gesetze vorsehen.{" "}
          </li>

          <li>
            <span>Behörden: </span>wenn dies nach den anwendbaren Gesetzen
            erforderlich ist oder wenn eine gerichtliche Verfügung vorliegt
          </li>

          <li>
            <span>Interne Geschäftsinfrastruktur:</span> beispielsweise Backup,
            Speicherung, Zahlungsvorgang, Support-Tool, elektronische
            Signaturen. Derzeit nutzen wir die folgenden Drittanbieter für die
            Zwecke unserer internen Geschäftsinfrastruktur:{" "}
          </li>

          <li>
            {" "}
            <span>Hosting-Plattform: </span>Google / DE-Frankfurt
          </li>
        </ul>

        <p className={style.content}>
          {" "}
          Wenn wir Ihre personenbezogenen Daten an solche Drittanbieter
          weitergeben, werden angemessene Vorkehrungen getroffen, um eine
          korrekte und sichere Datenverarbeitung in Übereinstimmung mit den
          geltenden Datenschutzgesetzen zu gewährleisten (z. B.
          EU-Standardvertragsklauseln, Datenverarbeitungsverträge). Wir
          gestatten unseren Drittanbietern nicht, die personenbezogenen Daten,
          die wir ihnen zur Verfügung stellen, für ihre Marketingzwecke oder für
          andere Zwecke als in Verbindung mit den von ihnen für uns erbrachten
          Services zu verwenden.
        </p>

        <h4 className={style.title}>
          Wo bewahren wir Ihre persönlichen Daten auf?
        </h4>

        <p className={style.content}>
          {" "}
          Allgemein. Die Daten werden in der Regel in Zürich (Schweiz) oder bei
          unserem Hosting-Provider in Frankfurt (Deutschland) gespeichert. Die
          Schweiz wurde von der EU-Kommission als ein Land ausserhalb der EU und
          des EWR genehmigt, das ausreichende Sicherheitsvorkehrungen für den
          Schutz von persönlichen Daten gewährleistet (Angemessenheitsbeschluss
          der EU-Kommission gemäss Art. 45 DSGVO). Cross-Border-Transfer. inckd.
          kann persönliche Daten (unter Ausschluss von sensitiven persönlichen
          Daten) ausserhalb des Europäischen Wirtschaftsraums (EWR) übertragen.
          In einem solchen Fall wird inckd. diese persönlichen Daten, wo immer
          möglich und zumutbar, anonymisieren, so dass sie gemäss den geltenden
          Datenschutzgesetzen nicht mehr als persönliche Daten eingestuft
          werden. Sollte eine solche Anonymisierung nicht möglich sein, inckd.
          jeweils separate, unmodifizierte Standard-EU-Musterklauselvereinbarung
          gemäss dem EU-Beschluss 2010/87 / EU (gemäss der jeweils aktuellen
          Fassung) ab (optionale Klauseln dürfen entfernt werden).
        </p>

        <h4 className={style.title}>
          Wie lange werden die persönlichen Daten gespeichert?
        </h4>

        <p className={style.content}>
          {" "}
          Wir speichern Ihre persönlichen Daten während des Zeitraums der
          notwendig ist, um Ihnen die Webseite und Services angemessen und
          effizient anbieten zu können und, um den gesetzlichen Pflichten des
          anwendbaren Rechts nachzukommen. Wo spezifische Verträge zwischen
          Ihnen und uns vorliegen, löschen wir die persönlichen Daten innerhalb
          einer angemessenen Frist oder gemäss vertraglicher Vereinbarung nach
          Beendigung des Vertrages, es sei denn, das anwendbare Recht lässt dies
          nicht zu. Alle persönlichen Daten werden gelöscht, wenn sie nicht mehr
          für den originalen Zweck benötigt werden (es sei denn, das anwendbare
          Recht lässt dies nicht zu).
        </p>

        <p className={style.content}>
          {" "}
          Sensitive persönliche Daten werden in jedem Fall nach Beendigung der
          Services respektive des vertraglichen Verhältnisses innerhalb von 30
          Tagen gelöscht.
        </p>

        <h4 className={style.title}>Was sind Ihre Rechte?</h4>

        <p className={style.content}>
          {" "}
          Sie haben jederzeit das Recht, Informationen bezüglich Ihrer
          persönlichen Daten anzufragen. Sie haben das Recht, diese
          Informationen in elektronischer Form anzufordern und, wo nötig,
          Nachbesserung der persönlichen Daten zu verlangen sollten diese
          fehlerhaft sein. In Fällen wo die persönlichen Daten nicht notwendig
          sind, um die Webseite, oder Services anzubieten oder um vertragliche
          Pflichten nachzukommen, können Sie beantragen, dass diese persönlichen
          Daten permanent und sicher gelöscht werden.
        </p>

        <p className={style.content}>
          {" "}
          Wir wollen Ihre persönlichen Daten auf dem aktuellen Stand halten.
          Falls Sie Informationen bezüglich Ihrer persönlichen Daten erhalten
          möchten oder falls Sie möchten, dass Ihre persönlichen Daten gelöscht
          werden, dann bitte senden Sie eine Email an datasecurity@inckd.com mit
          dem Betreff «Daten Subjekt Anfrage / Data Subject Request». Ihre
          Anfrage wird zu gegebener Zeit und in jedem Fall innerhalb eines
          Monates bearbeitet. Sollte inckd. nur der Datenverarbeiter Ihrer
          persönlichen Daten sein, dann wird inckd. Ihre Anfrage so schnell wie
          möglich an den für die Datenverarbeitung Verantwortlichen
          weiterleiten.
        </p>

        <h4 className={style.title}>Anwendbares Recht und Gerichtsstand</h4>

        <p className={style.content}>
          {" "}
          Diese Datenschutzrichtlinie unterliegt dem materiellen Recht der
          Schweiz ohne weitere Bezugnahme auf die Kollisionsnormen und unter
          Ausschluss aller internationalen Übereinkommen. Alle Streitigkeiten,
          die sich aus oder im Zusammenhang mit dieser Datenschutzrichtlinie
          ergeben, unterliegen der Gerichtsbarkeit der zuständigen Gerichte im
          Kanton Zürich, Schweiz.
        </p>
      </div>
    </div>
    </>
  );
}