// Seeduino XIAO BLE THT
// https://wiki.seeedstudio.com/XIAO_BLE/
// https://github.com/crides/kleeb/blob/master/mcu.pretty/xiao-ble-tht.kicad_mod 
module.exports = {
                 params: {
                  designator: 'MCU',
					VBUS: { type: "net", value: "VBUS" },
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
                body: p => `
                  (module "rp2040_zero"
				  (layer "F.Cu")
                    ${p.at /* parametric position */}
                    (attr through_hole)
              
                    ${"" /* footprint reference */}
                    (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${
                    p.ref_hide
                  } (effects (font (size 1.27 1.27) (thickness 0.15))))
				  (fp_line (start 0 -24.765) (end 4.572 -24.765)
					(stroke (width 0.12) (type default)) (layer "F.SilkS") (tstamp c3411010-e7a0-40c0-a5e3-67014d8bf9cf))
				  (fp_line (start 0 -0.889) (end 3.81 -0.889)
					(stroke (width 0.12) (type default)) (layer "F.SilkS") (tstamp 0e704eb8-9e19-4b4e-be62-6c85cb4c2f1c))
				  (fp_line (start 15.748 -24.765) (end 20.32 -24.765)
					(stroke (width 0.12) (type default)) (layer "F.SilkS") (tstamp 39145471-2642-4ce6-aa05-fc632e65a994))
				  (fp_line (start 16.51 -0.889) (end 20.32 -0.889)
					(stroke (width 0.12) (type default)) (layer "F.SilkS") (tstamp 71cd1260-13b2-4f16-b46f-3bdb4028836d))
				  (fp_line (start 4.826 -23.749) (end 4.826 -4.953)
					(stroke (width 0.12) (type default)) (layer "Edge.Cuts") (tstamp adfd8f8f-5564-4542-a8c0-2284d99b582a))
				  (fp_line (start 5.842 -3.937) (end 14.478 -3.937)
					(stroke (width 0.12) (type default)) (layer "Edge.Cuts") (tstamp 6ce8ff2c-8c5f-4fc6-8b1b-d2b75a416882))
				  (fp_line (start 15.494 -4.953) (end 15.494 -23.749)
					(stroke (width 0.12) (type default)) (layer "Edge.Cuts") (tstamp 6decd4fd-9a60-4c26-a930-65b0314e4da4))
				  (fp_arc (start 5.842 -3.937) (mid 5.12358 -4.23458) (end 4.826 -4.953)
					(stroke (width 0.12) (type default)) (layer "Edge.Cuts") (tstamp e54abe8f-5a59-4191-a07a-93a6e8046643))
				  (fp_arc (start 15.494 -4.953) (mid 15.19642 -4.23458) (end 14.478 -3.937)
					(stroke (width 0.12) (type default)) (layer "Edge.Cuts") (tstamp 8b9d705e-c0e5-45e7-983b-5ed6650db806))
				  (fp_line (start 1.016 -24.765) (end 5.715 -24.765)
					(stroke (width 0.1) (type default)) (layer "F.Fab") (tstamp a646731b-b993-40fc-b365-700092f29cc9))
				  (fp_line (start 1.143 -0.889) (end 1.016 -24.765)
					(stroke (width 0.1) (type default)) (layer "F.Fab") (tstamp 05b1770d-4da0-4c99-9eee-1e9ae0ce87d5))
				  (fp_line (start 14.732 -24.765) (end 19.304 -24.765)
					(stroke (width 0.1) (type default)) (layer "F.Fab") (tstamp fe7d68da-e40c-4543-a1bb-e33a798ffdf6))
				  (fp_line (start 19.304 -24.765) (end 19.304 -0.889)
					(stroke (width 0.1) (type default)) (layer "F.Fab") (tstamp 746e793e-9cfb-458e-9542-b8e49f5520b1))
				  (fp_line (start 19.304 -0.889) (end 1.143 -0.889)
					(stroke (width 0.1) (type default)) (layer "F.Fab") (tstamp 6f8432e7-4df4-473c-9b5a-22bab059936d))
				  (fp_rect (start 5.715 -26.543) (end 14.732 -21.209)
					(stroke (width 0.1) (type default)) (fill none) (layer "F.Fab") (tstamp ae4fd642-3fd5-45a1-8d4a-392f147939cc))
				  (pad "1" smd rect (at 1.64 -22.987) (size 3.5 1.7) (layers "F.Cu" "F.Mask") ${p.VBUS.str})
				  (pad "1" thru_hole circle (at 2.54 -22.987) (size 1.7 1.7) (drill 0.8) (layers "*.Cu" "*.Mask") ${p.VBUS.str})
				  (pad "2" smd rect (at 1.64 -20.447) (size 3.5 1.7) (layers "F.Cu" "F.Mask") ${p.GND.str})
				  (pad "2" thru_hole circle (at 2.54 -20.447) (size 1.7 1.7) (drill 0.8) (layers "*.Cu" "*.Mask") ${p.GND.str})
				  (pad "3" smd rect (at 1.64 -17.907) (size 3.5 1.7) (layers "F.Cu" "F.Mask") ${p._3V3.str})
				  (pad "3" thru_hole circle (at 2.54 -17.907) (size 1.7 1.7) (drill 0.8) (layers "*.Cu" "*.Mask") ${p._3V3.str})
				  (pad "4" smd rect (at 1.64 -15.367) (size 3.5 1.7) (layers "F.Cu" "F.Mask") ${p.VCC.str})
				  (pad "4" thru_hole circle (at 2.54 -15.367) (size 1.7 1.7) (drill 0.8) (layers "*.Cu" "*.Mask") ${p.VCC.str})
				  (pad "5" smd rect (at 1.64 -12.827) (size 3.5 1.7) (layers "F.Cu" "F.Mask") ${p.GP29.str})
				  (pad "5" thru_hole circle (at 2.54 -12.827) (size 1.7 1.7) (drill 0.8) (layers "*.Cu" "*.Mask") ${p.GP29.str})
				  (pad "6" smd rect (at 1.69 -10.287) (size 3.5 1.7) (layers "F.Cu" "F.Mask") ${p.GP27.str})
				  (pad "6" thru_hole circle (at 2.54 -10.287) (size 1.7 1.7) (drill 0.8) (layers "*.Cu" "*.Mask") ${p.GP27.str})
				  (pad "7" smd rect (at 1.69 -7.747) (size 3.5 1.7) (layers "F.Cu" "F.Mask") ${p.GP26.str})
				  (pad "7" thru_hole circle (at 2.54 -7.747) (size 1.7 1.7) (drill 0.8) (layers "*.Cu" "*.Mask") ${p.GP26.str})
				  (pad "8" smd rect (at 1.69 -5.207) (size 3.5 1.7) (layers "F.Cu" "F.Mask") ${p.GP15.str})
				  (pad "8" thru_hole circle (at 2.54 -5.207) (size 1.7 1.7) (drill 0.8) (layers "*.Cu" "*.Mask") ${p.GP15.str})
				  (pad "9" smd rect (at 1.69 -2.667) (size 3.5 1.7) (layers "F.Cu" "F.Mask") ${p.GP14.str})
				  (pad "9" thru_hole circle (at 2.54 -2.667) (size 1.7 1.7) (drill 0.8) (layers "*.Cu" "*.Mask") ${p.GP14.str})
				  (pad "10" thru_hole circle (at 17.78 -22.987) (size 1.7 1.7) (drill 0.8) (layers "*.Cu" "*.Mask") ${p.GP13.str})
				  (pad "10" smd rect (at 18.68 -22.987) (size 3.5 1.7) (layers "F.Cu" "F.Mask") ${p.GP13.str})
				  (pad "11" thru_hole circle (at 17.78 -20.447) (size 1.7 1.7) (drill 0.8) (layers "*.Cu" "*.Mask") ${p.GP12.str})
				  (pad "11" smd rect (at 18.68 -20.447) (size 3.5 1.7) (layers "F.Cu" "F.Mask") ${p.GP12.str})
				  (pad "12" thru_hole circle (at 17.78 -17.907) (size 1.7 1.7) (drill 0.8) (layers "*.Cu" "*.Mask") ${p.GP11.str})
				  (pad "12" smd rect (at 18.68 -17.907) (size 3.5 1.7) (layers "F.Cu" "F.Mask") ${p.GP11.str})
				  (pad "13" thru_hole circle (at 17.78 -15.367) (size 1.7 1.7) (drill 0.8) (layers "*.Cu" "*.Mask") ${p.GP10.str})
				  (pad "13" smd rect (at 18.68 -15.367) (size 3.5 1.7) (layers "F.Cu" "F.Mask") ${p.GP10.str})
				  (pad "14" thru_hole circle (at 17.78 -12.827) (size 1.7 1.7) (drill 0.8) (layers "*.Cu" "*.Mask") ${p.GP9.str})
				  (pad "14" smd rect (at 18.68 -12.827) (size 3.5 1.7) (layers "F.Cu" "F.Mask") ${p.GP9.str})
				  (pad "15" thru_hole circle (at 17.78 -10.287) (size 1.7 1.7) (drill 0.8) (layers "*.Cu" "*.Mask") ${p.GP8.str})
				  (pad "15" smd rect (at 18.68 -10.287) (size 3.5 1.7) (layers "F.Cu" "F.Mask") ${p.GP8.str})
				  (pad "16" thru_hole circle (at 17.78 -7.747) (size 1.7 1.7) (drill 0.8) (layers "*.Cu" "*.Mask") ${p.GP7.str})
				  (pad "16" smd rect (at 18.68 -7.747) (size 3.5 1.7) (layers "F.Cu" "F.Mask") ${p.GP7.str})
				  (pad "17" thru_hole circle (at 17.78 -5.207) (size 1.7 1.7) (drill 0.8) (layers "*.Cu" "*.Mask") ${p.GP6.str})
				  (pad "17" smd rect (at 18.68 -5.207) (size 3.5 1.7) (layers "F.Cu" "F.Mask") ${p.GP6.str})
				  (pad "18" thru_hole circle (at 17.78 -2.667) (size 1.7 1.7) (drill 0.8) (layers "*.Cu" "*.Mask") ${p.GP5.str})
				  (pad "18" smd rect (at 18.68 -2.667) (size 3.5 1.7) (layers "F.Cu" "F.Mask") ${p.GP5.str})
				  (pad "19" thru_hole circle (at 5.08 -2.667) (size 1.7 1.7) (drill 0.8) (layers "*.Cu" "*.Mask") ${p.GP4.str})
				  (pad "19" smd rect (at 5.08 -1.767 90) (size 3.5 1.7) (layers "F.Cu" "F.Mask") ${p.GP4.str})
				  (pad "20" thru_hole circle (at 7.62 -2.667) (size 1.7 1.7) (drill 0.8) (layers "*.Cu" "*.Mask") ${p.GP3.str})
				  (pad "20" smd rect (at 7.62 -1.817 90) (size 3.5 1.7) (layers "F.Cu" "F.Mask") ${p.GP3.str})
				  (pad "21" thru_hole circle (at 10.16 -2.667) (size 1.7 1.7) (drill 0.8) (layers "*.Cu" "*.Mask") ${p.GP2.str})
				  (pad "21" smd rect (at 10.16 -1.817 90) (size 3.5 1.7) (layers "F.Cu" "F.Mask") ${p.GP2.str})
				  (pad "22" thru_hole circle (at 12.7 -2.667) (size 1.7 1.7) (drill 0.8) (layers "*.Cu" "*.Mask") ${p.GP1.str})
				  (pad "22" smd rect (at 12.7 -1.817 90) (size 3.5 1.7) (layers "F.Cu" "F.Mask") ${p.GP1.str})
				  (pad "23" thru_hole circle (at 15.24 -2.667) (size 1.7 1.7) (drill 0.8) (layers "*.Cu" "*.Mask") ${p.GP0.str})
				  (pad "23" smd rect (at 15.24 -1.817 90) (size 3.5 1.7) (layers "F.Cu" "F.Mask") ${p.GP0.str})
				)
                  `
}