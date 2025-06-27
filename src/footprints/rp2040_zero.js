// Seeduino XIAO BLE THT
// https://wiki.seeedstudio.com/XIAO_BLE/
// https://github.com/crides/kleeb/blob/master/mcu.pretty/xiao-ble-tht.kicad_mod 
module.exports = {
	 params: {
	  designator: 'MCU',
	    _5V: { type: "net", value: "5V" },
		GND: { type: "net", value: "GND" },
		_3V3: { type: "net", value: "3V3" },
		VCC: { type: "net", value: "VCC" },
		GP29: { type: "net", value: "GP29" },
		GP28: { type: "net", value: "GP28" },
		GP27: { type: "net", value: "GP27" },
		GP26: { type: "net", value: "GP26" },
		GP15: { type: "net", value: "GP15" },
		GP14: { type: "net", value: "GP14" },
		GP13: { type: "net", value: "GP13" },
		GP12: { type: "net", value: "GP12" },
		GP11: { type: "net", value: "GP11" },
		GP10: { type: "net", value: "GP10" },
		GP09: { type: "net", value: "GP09" },
		GP08: { type: "net", value: "GP08" },
		GP07: { type: "net", value: "GP07" },
		GP06: { type: "net", value: "GP06" },
		GP05: { type: "net", value: "GP05" },
		GP04: { type: "net", value: "GP04" },
		GP03: { type: "net", value: "GP03" },
		GP02: { type: "net", value: "GP02" },
		GP01: { type: "net", value: "GP01" },
		GP00: { type: "net", value: "GP00" },
	},
  body: p => {
	const standard = `
						(module RP2040-Zero (layer F.Cu) (tedit 5B307E4C)
						${p.at /* parametric position */}

						${"" /* footprint reference */}
						(fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${
										p.ref_hide
									} (effects (font (size 1.27 1.27) (thickness 0.15))))
						(fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

						(fp_line (start -9 -11.75) (end -9 11.75)(stroke (width 0.12) (type solid))(layer "F.SilkS" )(uuid "3a1dbf7b-46ab-4381-b591-554d2769ad07"))
						(fp_line (start -9 11.75) (end 9 11.75)(stroke (width 0.12) (type solid))(layer "F.SilkS" )(uuid "89d0c3a9-2f98-451a-8c17-8db5c563d887"))
						(fp_line (start 9 -11.75) (end -9 -11.75)(stroke (width 0.12) (type solid))(layer "F.SilkS" )(uuid "3746518e-ec8f-4326-9e80-93b618a3f818"))
						(fp_line (start 9 11.75) (end 9 -11.75)(stroke (width 0.12) (type solid))(layer "F.SilkS" )(uuid "d7678225-9962-4b6c-8ac6-79810f77c6a5"))
						(fp_line (start -9 -11.75) (end 9 -11.75)(stroke (width 0.05) (type solid))(layer "F.CrtYd" )(uuid "04b002c5-b0ed-45ea-8acf-6f312ef24433"))
						(fp_line (start -9 11.75) (end -9 -11.75)(stroke (width 0.05) (type solid))(layer "F.CrtYd" )(uuid "bde8ecb6-8f54-4c81-a756-d3f5f8297c6e"))
						(fp_line (start 9 -11.75) (end 9 11.75)(stroke (width 0.05) (type solid))(layer "F.CrtYd" )(uuid "4957628a-0487-4b2e-9e46-2b76a5391512"))
						(fp_line (start 9 11.75) (end -9 11.75)(stroke (width 0.05) (type solid))(layer "F.CrtYd" )(uuid "5697aad3-3e4a-490a-b02f-474ea55f0389"))
						(fp_line (start -4.33 -12.75) (end -4.33 -11.75)(stroke (width 0.1) (type solid))(layer "F.Fab" )(uuid "63b68ece-0a85-4af3-bc33-a171573f16ef"))
						(fp_line (start -4.33 -12.75) (end 4.3 -12.75)(stroke (width 0.1) (type solid))(layer "F.Fab" )(uuid "e0f4b64b-b739-484e-ba8e-428dcc3492f8"))
						(fp_line (start 4.3 -12.75) (end 4.3 -11.75)(stroke (width 0.1) (type solid))(layer "F.Fab" )(uuid "add39d24-8dd2-4939-b1b3-3e14ce58359e"))
					`;
                    function pins(def_neg, def_pos) {
                        return `
		(fp_text user "GP0"(at 11.5 ${def_pos}10.16 ${p.rot})(unlocked yes)(layer "F.SilkS" )(uuid "db7aa810-d066-43a8-9b1b-de634406304c")(effects(font(size 0.8 0.8)(thickness 0.15))))
		(fp_text user "GP1"(at 11.5 ${def_pos}7.62 ${p.rot})(unlocked yes)(layer "F.SilkS" )(uuid "db7aa810-d066-43a8-9b1b-de634406304c")(effects(font(size 0.8 0.8)(thickness 0.15))))
		(fp_text user "GP2"(at 11.5 ${def_pos}5.08 ${p.rot})(unlocked yes)(layer "F.SilkS" )(uuid "db7aa810-d066-43a8-9b1b-de634406304c")(effects(font(size 0.8 0.8)(thickness 0.15))))
		(fp_text user "GP3"(at 11.5 ${def_pos}2.54 ${p.rot})(unlocked yes)(layer "F.SilkS" )(uuid "db7aa810-d066-43a8-9b1b-de634406304c")(effects(font(size 0.8 0.8)(thickness 0.15))))
		(fp_text user "GP4"(at 11.5 ${def_pos}0 ${p.rot})(unlocked yes)(layer "F.SilkS" )(uuid "db7aa810-d066-43a8-9b1b-de634406304c")(effects(font(size 0.8 0.8)(thickness 0.15))))
		(fp_text user "GP5"(at 11.5 ${def_neg}2.54 ${p.rot})(unlocked yes)(layer "F.SilkS" )(uuid "db7aa810-d066-43a8-9b1b-de634406304c")(effects(font(size 0.8 0.8)(thickness 0.15))))
		(fp_text user "GP6"(at 11.5 ${def_neg}5.08 ${p.rot})(unlocked yes)(layer "F.SilkS" )(uuid "db7aa810-d066-43a8-9b1b-de634406304c")(effects(font(size 0.8 0.8)(thickness 0.15))))
		(fp_text user "GP7"(at 11.5 ${def_neg}7.62 ${p.rot})(unlocked yes)(layer "F.SilkS" )(uuid "db7aa810-d066-43a8-9b1b-de634406304c")(effects(font(size 0.8 0.8)(thickness 0.15))))
		(fp_text user "GP8"(at 11.5 ${def_neg}10.16 ${p.rot})(unlocked yes)(layer "F.SilkS" )(uuid "db7aa810-d066-43a8-9b1b-de634406304c")(effects(font(size 0.8 0.8)(thickness 0.15))))

		(fp_text user "GP9"(at ${def_neg}5.08 14.25 ${p.rot+90})(unlocked yes)(layer "F.SilkS" )(uuid "db7aa810-d066-43a8-9b1b-de634406304c")(effects(font(size 0.8 0.8)(thickness 0.15))))
		(fp_text user "GP10"(at ${def_neg}2.54 14.25 ${p.rot+90})(unlocked yes)(layer "F.SilkS" )(uuid "db7aa810-d066-43a8-9b1b-de634406304c")(effects(font(size 0.8 0.8)(thickness 0.15))))
		(fp_text user "GP11"(at ${def_neg}0 14.25 ${p.rot+90})(unlocked yes)(layer "F.SilkS" )(uuid "db7aa810-d066-43a8-9b1b-de634406304c")(effects(font(size 0.8 0.8)(thickness 0.15))))
		(fp_text user "GP12"(at ${def_pos}2.54 14.25 ${p.rot+90})(unlocked yes)(layer "F.SilkS" )(uuid "db7aa810-d066-43a8-9b1b-de634406304c")(effects(font(size 0.8 0.8)(thickness 0.15))))
		(fp_text user "GP13"(at ${def_pos}5.08 14.25 ${p.rot+90})(unlocked yes)(layer "F.SilkS" )(uuid "db7aa810-d066-43a8-9b1b-de634406304c")(effects(font(size 0.8 0.8)(thickness 0.15))))

		(fp_text user "GP14"(at -11.5 ${def_neg}10.16 ${p.rot})(unlocked yes)(layer "F.SilkS" )(uuid "db7aa810-d066-43a8-9b1b-de634406304c")(effects(font(size 0.8 0.8)(thickness 0.15))))
		(fp_text user "GP15"(at -11.5 ${def_neg}7.62 ${p.rot})(unlocked yes)(layer "F.SilkS" )(uuid "db7aa810-d066-43a8-9b1b-de634406304c")(effects(font(size 0.8 0.8)(thickness 0.15))))
		(fp_text user "GP26"(at -11.5 ${def_neg}5.08 ${p.rot})(unlocked yes)(layer "F.SilkS" )(uuid "db7aa810-d066-43a8-9b1b-de634406304c")(effects(font(size 0.8 0.8)(thickness 0.15))))
		(fp_text user "GP27"(at -11.5 ${def_neg}2.54 ${p.rot})(unlocked yes)(layer "F.SilkS" )(uuid "db7aa810-d066-43a8-9b1b-de634406304c")(effects(font(size 0.8 0.8)(thickness 0.15))))
		(fp_text user "GP28"(at -11.5 ${def_pos}0 ${p.rot})(unlocked yes)(layer "F.SilkS" )(uuid "db7aa810-d066-43a8-9b1b-de634406304c")(effects(font(size 0.8 0.8)(thickness 0.15))))
		(fp_text user "GP29"(at -11.5 ${def_pos}2.54 ${p.rot})(unlocked yes)(layer "F.SilkS" )(uuid "db7aa810-d066-43a8-9b1b-de634406304c")(effects(font(size 0.8 0.8)(thickness 0.15))))
		(fp_text user "3V3"(at -11.5 ${def_pos}5.08 ${p.rot})(unlocked yes)(layer "F.SilkS" )(uuid "db7aa810-d066-43a8-9b1b-de634406304c")(effects(font(size 0.8 0.8)(thickness 0.15))))
		(fp_text user "GND"(at -11.5 ${def_pos}7.62 ${p.rot})(unlocked yes)(layer "F.SilkS" )(uuid "db7aa810-d066-43a8-9b1b-de634406304c")(effects(font(size 0.8 0.8)(thickness 0.15))))
		(fp_text user "5V"(at -11.5 ${def_pos}10.16 ${p.rot})(unlocked yes)(layer "F.SilkS" )(uuid "db7aa810-d066-43a8-9b1b-de634406304c")(effects(font(size 0.8 0.8)(thickness 0.15))))


		(pad "1" thru_hole roundrect(at 7.62 ${def_pos}10.16 ${p.rot})(size 2.6 1.6)(drill 0.8(offset 0.6 0))(layers  "*.Cu" "*.Mask")(uuid "08e2d62f-f99a-4268-8b33-617dfcc63e75")${p.GP00.str})
		(pad "2" thru_hole roundrect(at 7.62 ${def_pos}7.62 ${p.rot})(size 2.6 1.6)(drill 0.8(offset 0.6 0))(layers  "*.Cu" "*.Mask")(uuid "4d609e7c-74c9-4ae9-a26d-946ff00c167d")${p.GP01.str})
		(pad "3" thru_hole roundrect(at 7.62 ${def_pos}5.08 ${p.rot})(size 2.6 1.6)(drill 0.8(offset 0.6 0))(layers  "*.Cu" "*.Mask")(uuid "0867287d-2e6a-4d69-a366-c29f88198f2b")${p.GP02.str})
		(pad "4" thru_hole roundrect(at 7.62 ${def_pos}2.54 ${p.rot})(size 2.6 1.6)(drill 0.8(offset 0.6 0))(layers  "*.Cu" "*.Mask")(uuid "2732632c-4768-42b6-bf7f-14643424019e")${p.GP03.str})
		(pad "5" thru_hole roundrect(at 7.62 ${def_pos}0 ${p.rot})(size 2.6 1.6)(drill 0.8(offset 0.6 0))(layers  "*.Cu" "*.Mask")(uuid "9ccf03e8-755a-4cd9-96fc-30e1d08fa253")${p.GP04.str})
		(pad "6" thru_hole roundrect(at 7.62 ${def_neg}2.54 ${p.rot})(size 2.6 1.6002)(drill 0.8(offset 0.6 0))(layers  "*.Cu" "*.Mask")(uuid "30f15357-ce1d-48b9-93dc-7d9b1b2aa048")${p.GP05.str})
		(pad "7" thru_hole roundrect(at 7.62 ${def_neg}5.08 ${p.rot})(size 2.6 1.6002)(drill 0.8(offset 0.6 0))(layers  "*.Cu" "*.Mask")(uuid "2d210a96-f81f-42a9-8bf4-1b43c11086f3")${p.GP06.str})
		(pad "8" thru_hole roundrect(at 7.62 ${def_neg}7.62 ${p.rot})(size 2.6 1.6002)(drill 0.8(offset 0.6 0))(layers  "*.Cu" "*.Mask")(uuid "2f215f15-3d52-4c91-93e6-3ea03a95622f")${p.GP07.str})
		(pad "9" thru_hole roundrect(at 7.62 ${def_neg}10.16 ${p.rot})(size 2.6 1.6002)(drill 0.8(offset 0.6 0))(layers  "*.Cu" "*.Mask")(uuid "0ff508fd-18da-4ab7-9844-3c8a28c2587e")${p.GP08.str})
		
		
		(pad "10" thru_hole roundrect(at ${def_neg}5.08 10.37 )(size 1.6 2.6)(drill 0.8(offset 0 0.6))(layers  "*.Cu" "*.Mask")(uuid "cdfb07af-801b-44ba-8c30-d021a6ad3039")${p.GP09.str})
		(pad "11" thru_hole roundrect(at ${def_neg}2.54 10.37 )(size 1.5748 2.6)(drill 0.8(offset 0 0.6))(layers  "*.Cu" "*.Mask")(uuid "d0d2eee9-31f6-44fa-8149-ebb4dc2dc0dc")${p.GP10.str})
		(pad "12" thru_hole roundrect(at ${def_neg}0 10.37 )(size 1.5748 2.6)(drill 0.8(offset 0 0.6))(layers  "*.Cu" "*.Mask")(uuid "d5b800ca-1ab6-4b66-b5f7-2dda5658b504")${p.GP11.str})
		(pad "13" thru_hole roundrect(at ${def_pos}2.54 10.37 )(size 1.5748 2.6)(drill 0.8(offset 0 0.6))(layers  "*.Cu" "*.Mask")(uuid "eee16674-2d21-45b6-ab5e-d669125df26c")${p.GP12.str})
		(pad "14" thru_hole roundrect(at ${def_pos}5.08 10.37 )(size 1.5748 2.6)(drill 0.8(offset 0 0.6))(layers  "*.Cu" "*.Mask")(uuid "03c7f780-fc1b-487a-b30d-567d6c09fdc8")${p.GP13.str})


		(pad "15" thru_hole roundrect(at -7.62 ${def_neg}10.16 ${p.rot})(size 2.6 1.6002)(drill 0.8(offset -0.6 0))(layers  "*.Cu" "*.Mask")(uuid "00e38d63-5436-49db-81f5-697421f168fc")${p.GP14.str})
		(pad "16" thru_hole roundrect(at -7.62 ${def_neg}7.62 ${p.rot})(size 2.6 1.6002)(drill 0.8(offset -0.6 0))(layers  "*.Cu" "*.Mask")(uuid "fb30f9bb-6a0b-4d8a-82b0-266eab794bc6")${p.GP15.str})
		(pad "17" thru_hole roundrect(at -7.62 ${def_neg}5.08 ${p.rot})(size 2.6 1.6002)(drill 0.8(offset -0.6 0))(layers  "*.Cu" "*.Mask")(uuid "9a2d648d-863a-4b7b-80f9-d537185c212b")${p.GP26.str})
		(pad "18" thru_hole roundrect(at -7.62 ${def_neg}2.54 ${p.rot})(size 2.6 1.6002)(drill 0.8(offset -0.6 0))(layers  "*.Cu" "*.Mask")(uuid "1bdd5841-68b7-42e2-9447-cbdb608d8a08")${p.GP27.str})
		(pad "19" thru_hole roundrect(at -7.62 ${def_neg}0 ${p.rot})(size 2.6 1.6002)(drill 0.8(offset -0.6 0))(layers  "*.Cu" "*.Mask")(uuid "aa047297-22f8-4de0-a969-0b3451b8e164")${p.GP28.str})
		(pad "20" thru_hole roundrect(at -7.62 ${def_pos}2.54 ${p.rot})(size 2.6 1.6002)(drill 0.8(offset -0.6 0))(layers  "*.Cu" "*.Mask")(uuid "a76a574b-1cac-43eb-81e6-0e2e278cea39")${p.GP29.str})
		(pad "21" thru_hole roundrect(at -7.62 ${def_pos}5.08 ${p.rot})(size 2.6 1.6002)(drill 0.8(offset -0.6 0))(layers  "*.Cu" "*.Mask")(uuid "14094ad2-b562-4efa-8c6f-51d7a3134345")${p._3V3.str})
		(pad "22" thru_hole roundrect(at -7.62 ${def_pos}7.62 ${p.rot})(size 2.6 1.6002)(drill 0.8(offset -0.6 0))(layers  "*.Cu" "*.Mask")(uuid "bd793ae5-cde5-43f6-8def-1f95f35b1be6")${p.GND.str})
		(pad "23" thru_hole roundrect(at -7.62 ${def_pos}10.16 ${p.rot})(size 2.6 1.6002)(drill 0.8(offset -0.6 0))(layers  "*.Cu" "*.Mask")(uuid "07d160b6-23e1-4aa0-95cb-440482e6fc15")${p._5V.str})

		`;
    }
    if(p.orientation == 'down') {
      return `
        ${standard}
        ${pins('-', '')})
        `
    } else {
      return `
        ${standard}
        ${pins('', '-')})
        `
    }
  }
}