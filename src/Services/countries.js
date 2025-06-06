const countries = [
  {
    name: "Afghanistan",
    flag: "https://flagcdn.com/af.svg",
    code: "AF",
    code3: "AFG"
  },
  {
    name: "Albania",
    flag: "https://flagcdn.com/al.svg",
    code: "AL",
    code3: "ALB"
  },
  {
    name: "Algeria",
    flag: "https://flagcdn.com/dz.svg",
    code: "DZ",
    code3: "DZA"
  },
  {
    name: "Andorra",
    flag: "https://flagcdn.com/ad.svg",
    code: "AD",
    code3: "AND"
  },
  {
    name: "Angola",
    flag: "https://flagcdn.com/ao.svg",
    code: "AO",
    code3: "AGO"
  },
  {
    name: "Antigua and Barbuda",
    flag: "https://flagcdn.com/ag.svg",
    code: "AG",
    code3: "ATG"
  },
  {
    name: "Argentina",
    flag: "https://flagcdn.com/ar.svg",
    code: "AR",
    code3: "ARG"
  },
  {
    name: "Armenia",
    flag: "https://flagcdn.com/am.svg",
    code: "AM",
    code3: "ARM"
  },
  {
    name: "Australia",
    flag: "https://flagcdn.com/au.svg",
    code: "AU",
    code3: "AUS"
  },
  {
    name: "Austria",
    flag: "https://flagcdn.com/at.svg",
    code: "AT",
    code3: "AUT"
  },
  {
    name: "Azerbaijan",
    flag: "https://flagcdn.com/az.svg",
    code: "AZ",
    code3: "AZE"
  },
  {
    name: "Bahamas",
    flag: "https://flagcdn.com/bs.svg",
    code: "BS",
    code3: "BHS"
  },
  {
    name: "Bahrain",
    flag: "https://flagcdn.com/bh.svg",
    code: "BH",
    code3: "BHR"
  },
  {
    name: "Bangladesh",
    flag: "https://flagcdn.com/bd.svg",
    code: "BD",
    code3: "BGD"
  },
  {
    name: "Barbados",
    flag: "https://flagcdn.com/bb.svg",
    code: "BB",
    code3: "BRB"
  },
  {
    name: "Belarus",
    flag: "https://flagcdn.com/by.svg",
    code: "BY",
    code3: "BLR"
  },
  {
    name: "Belgium",
    flag: "https://flagcdn.com/be.svg",
    code: "BE",
    code3: "BEL"
  },
  {
    name: "Belize",
    flag: "https://flagcdn.com/bz.svg",
    code: "BZ",
    code3: "BLZ"
  },
  {
    name: "Benin",
    flag: "https://flagcdn.com/bj.svg",
    code: "BJ",
    code3: "BEN"
  },
  {
    name: "Bhutan",
    flag: "https://flagcdn.com/bt.svg",
    code: "BT",
    code3: "BTN"
  },
  {
    name: "Bolivia",
    flag: "https://flagcdn.com/bo.svg",
    code: "BO",
    code3: "BOL"
  },
  {
    name: "Bosnia and Herzegovina",
    flag: "https://flagcdn.com/ba.svg",
    code: "BA",
    code3: "BIH"
  },
  {
    name: "Botswana",
    flag: "https://flagcdn.com/bw.svg",
    code: "BW",
    code3: "BWA"
  },
  {
    name: "Brazil",
    flag: "https://flagcdn.com/br.svg",
    code: "BR",
    code3: "BRA"
  },
  {
    name: "Brunei",
    flag: "https://flagcdn.com/bn.svg",
    code: "BN",
    code3: "BRN"
  },
  {
    name: "Bulgaria",
    flag: "https://flagcdn.com/bg.svg",
    code: "BG",
    code3: "BGR"
  },
  {
    name: "Burkina Faso",
    flag: "https://flagcdn.com/bf.svg",
    code: "BF",
    code3: "BFA"
  },
  {
    name: "Burundi",
    flag: "https://flagcdn.com/bi.svg",
    code: "BI",
    code3: "BDI"
  },
  {
    name: "Cabo Verde",
    flag: "https://flagcdn.com/cv.svg",
    code: "CV",
    code3: "CPV"
  },
  {
    name: "Cambodia",
    flag: "https://flagcdn.com/kh.svg",
    code: "KH",
    code3: "KHM"
  },
  {
    name: "Cameroon",
    flag: "https://flagcdn.com/cm.svg",
    code: "CM",
    code3: "CMR"
  },
  {
    name: "Canada",
    flag: "https://flagcdn.com/ca.svg",
    code: "CA",
    code3: "CAN"
  },
  {
    name: "Central African Republic",
    flag: "https://flagcdn.com/cf.svg",
    code: "CF",
    code3: "CAF"
  },
  {
    name: "Chad",
    flag: "https://flagcdn.com/td.svg",
    code: "TD",
    code3: "TCD"
  },
  {
    name: "Chile",
    flag: "https://flagcdn.com/cl.svg",
    code: "CL",
    code3: "CHL"
  },
  {
    name: "China",
    flag: "https://flagcdn.com/cn.svg",
    code: "CN",
    code3: "CHN"
  },
  {
    name: "Colombia",
    flag: "https://flagcdn.com/co.svg",
    code: "CO",
    code3: "COL"
  },
  {
    name: "Comoros",
    flag: "https://flagcdn.com/km.svg",
    code: "KM",
    code3: "COM"
  },
  {
    name: "Congo (Congo-Brazzaville)",
    flag: "https://flagcdn.com/cg.svg",
    code: "CG",
    code3: "COG"
  },
  {
    name: "Costa Rica",
    flag: "https://flagcdn.com/cr.svg",
    code: "CR",
    code3: "CRI"
  },
  {
    name: "Croatia",
    flag: "https://flagcdn.com/hr.svg",
    code: "HR",
    code3: "HRV"
  },
  {
    name: "Cuba",
    flag: "https://flagcdn.com/cu.svg",
    code: "CU",
    code3: "CUB"
  },
  {
    name: "Cyprus",
    flag: "https://flagcdn.com/cy.svg",
    code: "CY",
    code3: "CYP"
  },
  {
    name: "Czech Republic",
    flag: "https://flagcdn.com/cz.svg",
    code: "CZ",
    code3: "CZE"
  },
  {
    name: "Denmark",
    flag: "https://flagcdn.com/dk.svg",
    code: "DK",
    code3: "DNK"
  },
  {
    name: "Djibouti",
    flag: "https://flagcdn.com/dj.svg",
    code: "DJ",
    code3: "DJI"
  },
  {
    name: "Dominica",
    flag: "https://flagcdn.com/dm.svg",
    code: "DM",
    code3: "DMA"
  },
  {
    name: "Dominican Republic",
    flag: "https://flagcdn.com/do.svg",
    code: "DO",
    code3: "DOM"
  },
  {
    name: "Ecuador",
    flag: "https://flagcdn.com/ec.svg",
    code: "EC",
    code3: "ECU"
  },
  {
    name: "Egypt",
    flag: "https://flagcdn.com/eg.svg",
    code: "EG",
    code3: "EGY"
  },
  {
    name: "El Salvador",
    flag: "https://flagcdn.com/sv.svg",
    code: "SV",
    code3: "SLV"
  },
  {
    name: "Equatorial Guinea",
    flag: "https://flagcdn.com/gq.svg",
    code: "GQ",
    code3: "GNQ"
  },
  {
    name: "Eritrea",
    flag: "https://flagcdn.com/er.svg",
    code: "ER",
    code3: "ERI"
  },
  {
    name: "Estonia",
    flag: "https://flagcdn.com/ee.svg",
    code: "EE",
    code3: "EST"
  },
  {
    name: "Eswatini (fmr. Swaziland)",
    flag: "https://flagcdn.com/sz.svg",
    code: "SZ",
    code3: "SWZ"
  },
  {
    name: "Ethiopia",
    flag: "https://flagcdn.com/et.svg",
    code: "ET",
    code3: "ETH"
  },
  {
    name: "Fiji",
    flag: "https://flagcdn.com/fj.svg",
    code: "FJ",
    code3: "FJI"
  },
  {
    name: "Finland",
    flag: "https://flagcdn.com/fi.svg",
    code: "FI",
    code3: "FIN"
  },
  {
    name: "France",
    flag: "https://flagcdn.com/fr.svg",
    code: "FR",
    code3: "FRA"
  },
  {
    name: "Gabon",
    flag: "https://flagcdn.com/ga.svg",
    code: "GA",
    code3: "GAB"
  },
  {
    name: "Gambia",
    flag: "https://flagcdn.com/gm.svg",
    code: "GM",
    code3: "GMB"
  },
  {
    name: "Georgia",
    flag: "https://flagcdn.com/ge.svg",
    code: "GE",
    code3: "GEO"
  },
  {
    name: "Germany",
    flag: "https://flagcdn.com/de.svg",
    code: "DE",
    code3: "DEU"
  },
  {
    name: "Ghana",
    flag: "https://flagcdn.com/gh.svg",
    code: "GH",
    code3: "GHA"
  },
  {
    name: "Greece",
    flag: "https://flagcdn.com/gr.svg",
    code: "GR",
    code3: "GRC"
  },
  {
    name: "Grenada",
    flag: "https://flagcdn.com/gd.svg",
    code: "GD",
    code3: "GRD"
  },
  {
    name: "Guatemala",
    flag: "https://flagcdn.com/gt.svg",
    code: "GT",
    code3: "GTM"
  },
  {
    name: "Guinea",
    flag: "https://flagcdn.com/gn.svg",
    code: "GN",
    code3: "GIN"
  },
  {
    name: "Guinea-Bissau",
    flag: "https://flagcdn.com/gw.svg",
    code: "GW",
    code3: "GNB"
  },
  {
    name: "Guyana",
    flag: "https://flagcdn.com/gy.svg",
    code: "GY",
    code3: "GUY"
  },
  {
    name: "Haiti",
    flag: "https://flagcdn.com/ht.svg",
    code: "HT",
    code3: "HTI"
  },
  {
    name: "Honduras",
    flag: "https://flagcdn.com/hn.svg",
    code: "HN",
    code3: "HND"
  },
  {
    name: "Hungary",
    flag: "https://flagcdn.com/hu.svg",
    code: "HU",
    code3: "HUN"
  },
  {
    name: "Iceland",
    flag: "https://flagcdn.com/is.svg",
    code: "IS",
    code3: "ISL"
  },
  {
    name: "India",
    flag: "https://flagcdn.com/in.svg",
    code: "IN",
    code3: "IND"
  },
  {
    name: "Indonesia",
    flag: "https://flagcdn.com/id.svg",
    code: "ID",
    code3: "IDN"
  },
  {
    name: "Iran",
    flag: "https://flagcdn.com/ir.svg",
    code: "IR",
    code3: "IRN"
  },
  {
    name: "Iraq",
    flag: "https://flagcdn.com/iq.svg",
    code: "IQ",
    code3: "IRQ"
  },
  {
    name: "Ireland",
    flag: "https://flagcdn.com/ie.svg",
    code: "IE",
    code3: "IRL"
  },
  {
    name: "Israel",
    flag: "https://flagcdn.com/il.svg",
    code: "IL",
    code3: "ISR"
  },
  {
    name: "Italy",
    flag: "https://flagcdn.com/it.svg",
    code: "IT",
    code3: "ITA"
  },
  {
    name: "Jamaica",
    flag: "https://flagcdn.com/jm.svg",
    code: "JM",
    code3: "JAM"
  },
  {
    name: "Japan",
    flag: "https://flagcdn.com/jp.svg",
    code: "JP",
    code3: "JPN"
  },
  {
    name: "Jordan",
    flag: "https://flagcdn.com/jo.svg",
    code: "JO",
    code3: "JOR"
  },
  {
    name: "Kazakhstan",
    flag: "https://flagcdn.com/kz.svg",
    code: "KZ",
    code3: "KAZ"
  },
  {
    name: "Kenya",
    flag: "https://flagcdn.com/ke.svg",
    code: "KE",
    code3: "KEN"
  },
  {
    name: "Kiribati",
    flag: "https://flagcdn.com/ki.svg",
    code: "KI",
    code3: "KIR"
  },
  {
    name: "Korea, North",
    flag: "https://flagcdn.com/kp.svg",
    code: "KP",
    code3: "PRK"
  },
  {
    name: "Korea, South",
    flag: "https://flagcdn.com/kr.svg",
    code: "KR",
    code3: "KOR"
  },
  {
    name: "Kosovo",
    flag: "https://flagcdn.com/xk.svg",
    code: "XK",
    code3: "XKX"
  },
  {
    name: "Kuwait",
    flag: "https://flagcdn.com/kw.svg",
    code: "KW",
    code3: "KWT"
  },
  {
    name: "Kyrgyzstan",
    flag: "https://flagcdn.com/kg.svg",
    code: "KG",
    code3: "KGZ"
  },
  {
    name: "Laos",
    flag: "https://flagcdn.com/la.svg",
    code: "LA",
    code3: "LAO"
  },
  {
    name: "Latvia",
    flag: "https://flagcdn.com/lv.svg",
    code: "LV",
    code3: "LVA"
  },
  {
    name: "Lebanon",
    flag: "https://flagcdn.com/lb.svg",
    code: "LB",
    code3: "LBN"
  },
  {
    name: "Lesotho",
    flag: "https://flagcdn.com/ls.svg",
    code: "LS",
    code3: "LSO"
  },
  {
    name: "Liberia",
    flag: "https://flagcdn.com/lr.svg",
    code: "LR",
    code3: "LBR"
  },
  {
    name: "Libya",
    flag: "https://flagcdn.com/ly.svg",
    code: "LY",
    code3: "LBY"
  },
  {
    name: "Liechtenstein",
    flag: "https://flagcdn.com/li.svg",
    code: "LI",
    code3: "LIE"
  },
  {
    name: "Lithuania",
    flag: "https://flagcdn.com/lt.svg",
    code: "LT",
    code3: "LTU"
  },
  {
    name: "Luxembourg",
    flag: "https://flagcdn.com/lu.svg",
    code: "LU",
    code3: "LUX"
  },
  {
    name: "Madagascar",
    flag: "https://flagcdn.com/mg.svg",
    code: "MG",
    code3: "MDG"
  },
  {
    name: "Malawi",
    flag: "https://flagcdn.com/mw.svg",
    code: "MW",
    code3: "MWI"
  },
  {
    name: "Malaysia",
    flag: "https://flagcdn.com/my.svg",
    code: "MY",
    code3: "MYS"
  },
  {
    name: "Maldives",
    flag: "https://flagcdn.com/mv.svg",
    code: "MV",
    code3: "MDV"
  },
  {
    name: "Mali",
    flag: "https://flagcdn.com/ml.svg",
    code: "ML",
    code3: "MLI"
  },
  {
    name: "Malta",
    flag: "https://flagcdn.com/mt.svg",
    code: "MT",
    code3: "MLT"
  },
  {
    name: "Marshall Islands",
    flag: "https://flagcdn.com/mh.svg",
    code: "MH",
    code3: "MHL"
  },
  {
    name: "Mauritania",
    flag: "https://flagcdn.com/mr.svg",
    code: "MR",
    code3: "MRT"
  },
  {
    name: "Mauritius",
    flag: "https://flagcdn.com/mu.svg",
    code: "MU",
    code3: "MUS"
  },
  {
    name: "Mexico",
    flag: "https://flagcdn.com/mx.svg",
    code: "MX",
    code3: "MEX"
  },
  {
    name: "Micronesia",
    flag: "https://flagcdn.com/fm.svg",
    code: "FM",
    code3: "FSM"
  },
  {
    name: "Moldova",
    flag: "https://flagcdn.com/md.svg",
    code: "MD",
    code3: "MDA"
  },
  {
    name: "Monaco",
    flag: "https://flagcdn.com/mc.svg",
    code: "MC",
    code3: "MCO"
  },
  {
    name: "Mongolia",
    flag: "https://flagcdn.com/mn.svg",
    code: "MN",
    code3: "MNG"
  },
  {
    name: "Montenegro",
    flag: "https://flagcdn.com/me.svg",
    code: "ME",
    code3: "MNE"
  },
  {
    name: "Morocco",
    flag: "https://flagcdn.com/ma.svg",
    code: "MA",
    code3: "MAR"
  },
  {
    name: "Mozambique",
    flag: "https://flagcdn.com/mz.svg",
    code: "MZ",
    code3: "MOZ"
  },
  {
    name: "Myanmar (Burma)",
    flag: "https://flagcdn.com/mm.svg",
    code: "MM",
    code3: "MMR"
  },
  {
    name: "Namibia",
    flag: "https://flagcdn.com/na.svg",
    code: "NA",
    code3: "NAM"
  },
  {
    name: "Nauru",
    flag: "https://flagcdn.com/nr.svg",
    code: "NR",
    code3: "NRU"
  },
  {
    name: "Nepal",
    flag: "https://flagcdn.com/np.svg",
    code: "NP",
    code3: "NPL"
  },
  {
    name: "Netherlands",
    flag: "https://flagcdn.com/nl.svg",
    code: "NL",
    code3: "NLD"
  },
  {
    name: "New Zealand",
    flag: "https://flagcdn.com/nz.svg",
    code: "NZ",
    code3: "NZL"
  },
  {
    name: "Nicaragua",
    flag: "https://flagcdn.com/ni.svg",
    code: "NI",
    code3: "NIC"
  },
  {
    name: "Niger",
    flag: "https://flagcdn.com/ne.svg",
    code: "NE",
    code3: "NER"
  },
  {
    name: "Nigeria",
    flag: "https://flagcdn.com/ng.svg",
    code: "NG",
    code3: "NGA"
  },
  {
    name: "North Macedonia",
    flag: "https://flagcdn.com/mk.svg",
    code: "MK",
    code3: "MKD"
  },
  {
    name: "Norway",
    flag: "https://flagcdn.com/no.svg",
    code: "NO",
    code3: "NOR"
  },
  {
    name: "Oman",
    flag: "https://flagcdn.com/om.svg",
    code: "OM",
    code3: "OMN"
  },
  {
    name: "Pakistan",
    flag: "https://flagcdn.com/pk.svg",
    code: "PK",
    code3: "PAK"
  },
  {
    name: "Palau",
    flag: "https://flagcdn.com/pw.svg",
    code: "PW",
    code3: "PLW"
  },
  {
    name: "Panama",
    flag: "https://flagcdn.com/pa.svg",
    code: "PA",
    code3: "PAN"
  },
  {
    name: "Papua New Guinea",
    flag: "https://flagcdn.com/pg.svg",
    code: "PG",
    code3: "PNG"
  },
  {
    name: "Paraguay",
    flag: "https://flagcdn.com/py.svg",
    code: "PY",
    code3: "PRY"
  },
  {
    name: "Peru",
    flag: "https://flagcdn.com/pe.svg",
    code: "PE",
    code3: "PER"
  },
  {
    name: "Philippines",
    flag: "https://flagcdn.com/ph.svg",
    code: "PH",
    code3: "PHL"
  },
  {
    name: "Poland",
    flag: "https://flagcdn.com/pl.svg",
    code: "PL",
    code3: "POL"
  },
  {
    name: "Portugal",
    flag: "https://flagcdn.com/pt.svg",
    code: "PT",
    code3: "PRT"
  },
  {
    name: "Qatar",
    flag: "https://flagcdn.com/qa.svg",
    code: "QA",
    code3: "QAT"
  },
  {
    name: "Romania",
    flag: "https://flagcdn.com/ro.svg",
    code: "RO",
    code3: "ROU"
  },
  {
    name: "Russia",
    flag: "https://flagcdn.com/ru.svg",
    code: "RU",
    code3: "RUS"
  },
  {
    name: "Rwanda",
    flag: "https://flagcdn.com/rw.svg",
    code: "RW",
    code3: "RWA"
  },
  {
    name: "Saint Kitts and Nevis",
    flag: "https://flagcdn.com/kn.svg",
    code: "KN",
    code3: "KNA"
  },
  {
    name: "Saint Lucia",
    flag: "https://flagcdn.com/lc.svg",
    code: "LC",
    code3: "LCA"
  },
  {
    name: "Saint Vincent and the Grenadines",
    flag: "https://flagcdn.com/vc.svg",
    code: "VC",
    code3: "VCT"
  },
  {
    name: "Samoa",
    flag: "https://flagcdn.com/ws.svg",
    code: "WS",
    code3: "WSM"
  },
  {
    name: "San Marino",
    flag: "https://flagcdn.com/sm.svg",
    code: "SM",
    code3: "SMR"
  },
  {
    name: "Sao Tome and Principe",
    flag: "https://flagcdn.com/st.svg",
    code: "ST",
    code3: "STP"
  },
  {
    name: "Saudi Arabia",
    flag: "https://flagcdn.com/sa.svg",
    code: "SA",
    code3: "SAU"
  },
  {
    name: "Senegal",
    flag: "https://flagcdn.com/sn.svg",
    code: "SN",
    code3: "SEN"
  },
  {
    name: "Serbia",
    flag: "https://flagcdn.com/rs.svg",
    code: "RS",
    code3: "SRB"
  },
  {
    name: "Seychelles",
    flag: "https://flagcdn.com/sc.svg",
    code: "SC",
    code3: "SYC"
  },
  {
    name: "Sierra Leone",
    flag: "https://flagcdn.com/sl.svg",
    code: "SL",
    code3: "SLE"
  },
  {
    name: "Singapore",
    flag: "https://flagcdn.com/sg.svg",
    code: "SG",
    code3: "SGP"
  },
  {
    name: "Slovakia",
    flag: "https://flagcdn.com/sk.svg",
    code: "SK",
    code3: "SVK"
  },
  {
    name: "Slovenia",
    flag: "https://flagcdn.com/si.svg",
    code: "SI",
    code3: "SVN"
  },
  {
    name: "Solomon Islands",
    flag: "https://flagcdn.com/sb.svg",
    code: "SB",
    code3: "SLB"
  },
  {
    name: "Somalia",
    flag: "https://flagcdn.com/so.svg",
    code: "SO",
    code3: "SOM"
  },
  {
    name: "South Africa",
    flag: "https://flagcdn.com/za.svg",
    code: "ZA",
    code3: "ZAF"
  },
  {
    name: "South Sudan",
    flag: "https://flagcdn.com/ss.svg",
    code: "SS",
    code3: "SSD"
  },
  {
    name: "Spain",
    flag: "https://flagcdn.com/es.svg",
    code: "ES",
    code3: "ESP"
  },
  {
    name: "Sri Lanka",
    flag: "https://flagcdn.com/lk.svg",
    code: "LK",
    code3: "LKA"
  },
  {
    name: "Sudan",
    flag: "https://flagcdn.com/sd.svg",
    code: "SD",
    code3: "SDN"
  },
  {
    name: "Suriname",
    flag: "https://flagcdn.com/sr.svg",
    code: "SR",
    code3: "SUR"
  },
  {
    name: "Sweden",
    flag: "https://flagcdn.com/se.svg",
    code: "SE",
    code3: "SWE"
  },
  {
    name: "Switzerland",
    flag: "https://flagcdn.com/ch.svg",
    code: "CH",
    code3: "CHE"
  },
  {
    name: "Syria",
    flag: "https://flagcdn.com/sy.svg",
    code: "SY",
    code3: "SYR"
  },
  {
    name: "Taiwan",
    flag: "https://flagcdn.com/tw.svg",
    code: "TW",
    code3: "TWN"
  },
  {
    name: "Tajikistan",
    flag: "https://flagcdn.com/tj.svg",
    code: "TJ",
    code3: "TJK"
  },
  {
    name: "Tanzania",
    flag: "https://flagcdn.com/tz.svg",
    code: "TZ",
    code3: "TZA"
  },
  {
    name: "Thailand",
    flag: "https://flagcdn.com/th.svg",
    code: "TH",
    code3: "THA"
  },
  {
    name: "Togo",
    flag: "https://flagcdn.com/tg.svg",
    code: "TG",
    code3: "TGO"
  },
  {
    name: "Tonga",
    flag: "https://flagcdn.com/to.svg",
    code: "TO",
    code3: "TON"
  },
  {
    name: "Trinidad and Tobago",
    flag: "https://flagcdn.com/tt.svg",
    code: "TT",
    code3: "TTO"
  },
  {
    name: "Tunisia",
    flag: "https://flagcdn.com/tn.svg",
    code: "TN",
    code3: "TUN"
  },
  {
    name: "Turkey",
    flag: "https://flagcdn.com/tr.svg",
    code: "TR",
    code3: "TUR"
  },
  {
    name: "Turkmenistan",
    flag: "https://flagcdn.com/tm.svg",
    code: "TM",
    code3: "TKM"
  },
  {
    name: "Tuvalu",
    flag: "https://flagcdn.com/tv.svg",
    code: "TV",
    code3: "TUV"
  },
  {
    name: "Uganda",
    flag: "https://flagcdn.com/ug.svg",
    code: "UG",
    code3: "UGA"
  },
  {
    name: "Ukraine",
    flag: "https://flagcdn.com/ua.svg",
    code: "UA",
    code3: "UKR"
  },
  {
    name: "United Arab Emirates",
    flag: "https://flagcdn.com/ae.svg",
    code: "AE",
    code3: "ARE"
  },
  {
    name: "United Kingdom",
    flag: "https://flagcdn.com/gb.svg",
    code: "GB",
    code3: "GBR"
  },
  {
    name: "United States",
    flag: "https://flagcdn.com/us.svg",
    code: "US",
    code3: "USA"
  },
  {
    name: "Uruguay",
    flag: "https://flagcdn.com/uy.svg",
    code: "UY",
    code3: "URY"
  },
  {
    name: "Uzbekistan",
    flag: "https://flagcdn.com/uz.svg",
    code: "UZ",
    code3: "UZB"
  },
  {
    name: "Vanuatu",
    flag: "https://flagcdn.com/vu.svg",
    code: "VU",
    code3: "VUT"
  },
  {
    name: "Vatican City",
    flag: "https://flagcdn.com/va.svg",
    code: "VA",
    code3: "VAT"
  },
  {
    name: "Venezuela",
    flag: "https://flagcdn.com/ve.svg",
    code: "VE",
    code3: "VEN"
  },
  {
    name: "Vietnam",
    flag: "https://flagcdn.com/vn.svg",
    code: "VN",
    code3: "VNM"
  },
  {
    name: "Yemen",
    flag: "https://flagcdn.com/ye.svg",
    code: "YE",
    code3: "YEM"
  },
  {
    name: "Zambia",
    flag: "https://flagcdn.com/zm.svg",
    code: "ZM",
    code3: "ZMB"
  },
  {
    name: "Zimbabwe",
    flag: "https://flagcdn.com/zw.svg",
    code: "ZW",
    code3: "ZWE"
  }
]
 
export default countries;