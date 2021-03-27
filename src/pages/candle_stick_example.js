var trace1 = {
  x: ['2017-01-04', '2017-01-05', '2017-01-06', '2017-01-09', '2017-01-10', '2017-01-11', '2017-01-12', '2017-01-13', '2017-01-17', '2017-01-18', '2017-01-19', '2017-01-20', '2017-01-23', '2017-01-24', '2017-01-25', '2017-01-26', '2017-01-27', '2017-01-30', '2017-01-31', '2017-02-01', '2017-02-02', '2017-02-03', '2017-02-06', '2017-02-07', '2017-02-08', '2017-02-09', '2017-02-10', '2017-02-13', '2017-02-14', '2017-02-15'],
  close: [116.019997, 116.610001, 117.910004, 118.989998, 119.110001, 119.75, 119.25, 119.040001, 120, 119.989998, 119.779999, 120, 120.080002, 119.970001, 121.879997, 121.940002, 121.949997, 121.629997, 121.349998, 128.75, 128.529999, 129.080002, 130.289993, 131.529999, 132.039993, 132.419998, 132.119995, 133.289993, 135.020004, 135.509995],
  decreasing: {line: {color: '#7F7F7F'}},
  high: [116.510002, 116.860001, 118.160004, 119.43, 119.379997, 119.93, 119.300003, 119.620003, 120.239998, 120.5, 120.089996, 120.449997, 120.809998, 120.099998, 122.099998, 122.440002, 122.349998, 121.629997, 121.389999, 130.490005, 129.389999, 129.190002, 130.5, 132.089996, 132.220001, 132.449997, 132.940002, 133.820007, 135.089996, 136.270004],
  increasing: {line: {color: '#17BECF'}},
  line: {color: 'rgba(31,119,180,1)'},
  low: [115.75, 115.809998, 116.470001, 117.940002, 118.300003, 118.599998, 118.209999, 118.809998, 118.220001, 119.709999, 119.370003, 119.730003, 119.769997, 119.5, 120.279999, 121.599998, 121.599998, 120.660004, 120.620003, 127.010002, 127.779999, 128.160004, 128.899994, 130.449997, 131.220001, 131.119995, 132.050003, 132.75, 133.25, 134.619995],
  open: [115.849998, 115.919998, 116.779999, 117.949997, 118.769997, 118.739998, 118.900002, 119.110001, 118.339996, 120, 119.400002, 120.449997, 120, 119.550003, 120.419998, 121.669998, 122.139999, 120.93, 121.150002, 127.029999, 127.980003, 128.309998, 129.130005, 130.539993, 131.350006, 131.649994, 132.460007, 133.080002, 133.470001, 135.520004],
  type: 'candlestick',
  xaxis: 'x',
  yaxis: 'y'
};

var candles = [
  52989.21,
  53039.54,
  53150,
  53149.21,
  53227.85,
  53249.78,
  53242.03,
  53211.85,
  53174.24,
  53182.71,
  53149.06,
  53112.01,
  53172.86,
  53213.29,
  53238.74,
  53282.2,
  53219.36,
  53250.8,
  53260.21,
  53297.92,
  53407.01,
  53299.36,
  53268.49,
  53221.18,
  53175,
  53220.14,
  53146.73,
  53187.17,
  53159.53,
  53152.07,
  53141.7,
  53211.77,
  53182.36,
  53170.48,
  53195.04,
  53193.56,
  53156.55,
  53166.2,
  53259.99,
  53267.13,
  53186.42,
  53259.25,
  53226.6,
  53180.88,
  53187.27,
  53233.75,
  53249.82,
  53280.9,
  53282.84,
  53256.65,
  53189.5,
  53212.92,
  53196.03,
  53179.4,
  53160.87,
  53135.08,
  53162.85,
  53175.83,
  53153.79,
  53208.67,
  53164.14,
  53181.88,
  53182.09,
  53134.03,
  53170.41,
  53280.26,
  53265.36,
  53300.54,
  53294.7,
  53290.49,
  53275.06,
  53251.08,
  53279.57,
  53299.45,
  53299.14,
  53316.49,
  53415.23,
  53381.66,
  53422.44,
  53405.38,
  53454.53,
  53463.79,
  53411.23,
  53438.77,
  53395.79,
  53355.59,
  53313.68,
  53326.45,
  53315.33,
  53330.09,
  53333.1,
  53319.91,
  53345.66,
  53323.22,
  53333.1,
  53278.3,
  53232.45,
  53217.16,
  53236.37,
  53249.71,
  53328.08,
  53255.54,
  53322.2,
  53348.92,
  53332.91,
  53401.77,
  53341.8,
  53295.16,
  53288.22,
  53293.19,
  53250,
  53283.22,
  53270.84,
  53264.93,
  53289.64,
  53328.78,
  53371.78,
  53348.89,
  53351.71,
  53338.89,
  53333.11,
  53363.4,
  53392.89,
  53385.22,
  53349,
  53358.91,
  53333.51,
  53348.45,
  53355.71,
  53355.48,
  53284.86,
  53307.94,
  53267.79,
  53268.07,
  53259.03,
  53257.88,
  53238.68,
  53276.81,
  53256.14,
  53275.06,
  53338.02,
  53290.33,
  53208.5,
  53032.64,
  52964.44,
  53041.96,
  53090.17,
  53200,
  53357.43,
  53373.04,
  53362.45,
  53356.03,
  53420.92,
  53387.12,
  53423.11,
  53390.55,
  53634.49,
  53634.57,
  53681.1,
  53667.8,
  53695.78,
  53593.01,
  53641.07,
  53635.89,
  53621.22,
  53651.67,
  53645.82,
  53673.15,
  53685.63,
  53702.88,
  53786.18,
  53869.14,
  53910.97,
  53933.42,
  53931.09,
  53963.34,
  53981.08,
  53948.15,
  53923.61,
  53948.42,
  53924.51,
  53915.41,
  53913.25,
  53734.28,
  53812.81,
  53785.56,
  53791.98,
  53750.24,
  53699.81,
  53799.11,
  53751.81,
  53707.4,
  53770.38,
  53738.78,
  53726.25,
  53714.86,
  53721.55,
  53719.96,
  53737.35,
  53776.13,
  53709.06,
  53724.24,
  53732.7,
  53718.32,
  53686.71,
  53651.77,
  53609.01,
  53674.23,
  53623.48,
  53547.48,
  53635.88,
  53612.38,
  53626.78,
  53636.93,
  53590.16,
  53538.99,
  53550,
  53614.82,
  53692.09,
  53653.04,
  53680.19,
  53715.47,
  53698.76,
  53689.04,
  53659.53,
  53650.1,
  53711.77,
  53703.29,
  53705.58,
  53669.19,
  53756.81,
  53770.38,
  53800.4,
  53836.38,
  53782.44,
  53763.81,
  53742.35,
  53790.06,
  53754.82,
  53720.64,
  53751.11,
  53689,
  53707.55,
  53733.61,
  53739.42,
  53638.34,
  53683.51,
  53756,
  53742.64,
  53723.09,
  53797.37,
  53871.32,
  53814.33,
  53821.93,
  53826.27,
  53845.17,
  53829.58,
  53856.99,
  53833.89,
  53814.42,
  53855.59,
  53827.25,
  53838.82,
  53851.05,
  53841.3,
  53835.22,
  53776.16,
  53752.55,
  53773.87,
  53743.64,
  53766.17,
  53732.54,
  53661.94,
  53674.26,
  53654.65,
  53578.88,
  53498.66,
  53589.57,
  53499.62,
  53470.41,
  53486.48,
  53596.87,
  53611.74,
  53583.2,
  53573.2,
  53666.78,
  53670.47,
  53751.88,
  53759.1,
  53720.49,
  53730.36,
  53702.55,
  53691.75,
  53744.62,
  53640.89,
  53649.21,
  53567.78,
  53587.8,
  53577.47,
  53566.06,
  53605.46,
  53539.26,
  53552.31,
  53604.63,
  53617.72,
  53628.8,
  53597.52,
  53601.38,
  53518.24,
  53511.99,
  53531.77,
  53602.47,
  53609.45,
  53666.67,
  53660.85,
  53644.11,
  53600,
  53645.13,
  53688.43,
  53689.77,
  53650.98,
  53635.73,
  53592.37,
  53625.87,
  53628.32,
  53610.64,
  53653.2,
  53686,
  53644.96,
  53615.37,
  53604.13,
  53553.52,
  53561.82,
  53633.62,
  53647.28,
  53654.65,
  53591.06,
  53579.23,
  53617.6,
  53663.03,
  53626.3,
  53668.43,
  53633.25,
  53714.51,
  53694.32,
  53614.02,
  53593.62,
  53581.2,
  53600.6,
  53643.63,
  53716.72,
  53738.41,
  53689.71,
  53703.53,
  53618.36,
  53610.65,
  53607.71,
  53576.76,
  53545.1,
  53599.38,
  53559.12,
  53557.6,
  53580.53,
  53577.63,
  53590.35,
  53590.66,
  53640.65,
  53652.57,
  53637.67,
  53651.83,
  53684.73,
  53701.85,
  53641.8,
  53674.87,
  53662.08,
  53731.12,
  53753.23,
  53774.32,
  53774.29,
  53781.11,
  53830.71,
  53814.25,
  53850.08,
  53880.35,
  53889.32,
  53956.06,
  53997.29,
  54022.27,
  53987.56,
  53943.13,
  53939.49,
  54028.89,
  54164.19,
  54157.37,
  54134.19,
  54196.8,
  54134.5,
  54214.27,
  54183.56,
  54173.09,
  54113.08,
  54051.73,
  54059.23,
  54066.99,
  54081.79,
  54032.33,
  53958.4,
  53904.29,
  53871.23,
  53822.81,
  53821.72,
  53965.9,
  53985.64,
  53983.69,
  54042.12,
  54064.95,
  54116.2,
  54094.96,
  54112.61,
  54052.92,
  54091,
  54047.96,
  54064.57,
  54064.57,
  54066.5,
  54028.84,
  54044.94,
  53981.58,
  54013.47,
  54056.25,
  54041.51,
  53998.29,
  53984.64,
  54044.55,
  54070.89,
  54019.58,
  54015.2,
  54036.3,
  53988.96,
  53952.86,
  53971.13,
  54010.69,
  54034.91,
  54030,
  54076.82,
  54126.11,
  54139.05,
  54095.41,
  54101.89,
  54090.68,
  54090.69,
  54060.27,
  54038.55,
  54092.98,
  54050,
  54016.94,
  54104.41,
  54118.67,
  54125.78,
  54115.14,
  54150.34,
  54190,
  54358.08,
  54283.97,
  54334.2,
  54346.22,
  54286.51,
  54340.16,
  54305.28,
  54293.18,
  54350.6,
  54365.35,
  54343.75,
  54336.27,
  54350.17,
  54346.37,
  54289,
  54316.77,
  54365.12,
  54426.65,
  54366.33,
  54425.32,
  54474.2,
  54423.64,
  54496,
  54453.54,
  54555.1,
  54559,
  54480,
  54495.8,
  54565.49,
  54531.02,
  54525.21,
  54481.29,
  54431.68,
  54485.94,
  54451.1,
  54467.22,
  54440.22,
  54572.92,
  54548.65,
  54573.4,
  54573.78,
  54626.05,
  54618.38,
  54687,
  54609.29,
  54617.13,
  54536.57,
  54603.67,
  54540,
  54630.51,
  54614.87,
  54689.22,
  54602.32,
  54718.28,
  54717.29,
  54650.25,
  54650.64,
  54658.22,
  54633.87,
  54614.57,
  54531.83,
  54449.23,
  54543.6,
  54600,
  54653.5,
  54634.61,
  54644.64,
  54655.62,
  54582.84,
  54560.33,
  54543.95,
  54588.56,
  54540.76,
  54512.03,
  54504.68,
  54535.85,
  54483.75,
  54458.67,
  54440.14,
  54460.18,
  54458.54,
  54433.58,
  54491.27,
  54480.15,
  54493.44,
  54496.35,
  54455.62,
  54447.62,
  54405.16,
  54348.25,
  54379.66,
  54395.13,
  54424.95,
  54446.16,
  54447.03,
  54449.24,
  54413.44,
  54384.15,
  54346.91,
  54343.68,
  54315.02,
  54429.6,
  54459.94,
  54485.63,
  54442.35,
  54425.88,
  54389.78,
  54370.37,
  54362.74,
  54360.15,
  54359.65,
  54431.78,
  54432.33,
  54471.67,
  54480.97,
  54439.63,
  54433.53,
  54454.82,
  54530.49,
  54515.75,
  54515.09,
  54544.69,
  54620.7,
  54597.17,
  54598.15,
  54650,
  54661.81,
  54753.7,
  54811.28,
  54786.17,
  54759.96,
  54727.92,
  54719.77,
  54786.1,
  54768.21,
  54783.36,
  54728.27,
  54736.17,
  54696.99,
  54747.9,
  54731.91,
  54719.69,
  54691.57,
  54710.7,
  54669.1,
  54712.76,
  54763.8,
  54796.37,
  54788.45,
  54822.16,
  54901.34,
  55005.66,
  54968.12,
  54973.27,
  54938.69,
  54945.95,
  55008.28,
  55028.99,
  55248.89,
  55332.56,
  55404.94,
  55285.99,
  55257.42,
  55386.03,
  55354.97,
  55356.35,
  55314.57,
  55342.23,
  55395.25,
  55368.01,
  55372,
  55440.9,
  55460.55,
  55432.61,
  55486.9,
  55456.27,
  55507.24,
  55501.62,
  55409.9,
  55383.72,
  55365.8,
  55371.22,
  55352.35,
  55330,
  55311.87,
  55303.36,
  55239.9,
  55199.94,
  55237.09,
  55290.1,
  55233.4,
  55191.9,
  55220.4,
  55279.11,
  55306.02,
  55290.26,
  55230.01,
  55130.81,
  55070.31,
  55104.2,
  55133.16,
  55085.02,
  55009.56,
  55077.44,
  55105.98,
  55099,
  55028.09,
  55012.52,
  55018.28,
  54999.64,
  55004.03,
  54955.01,
  54900.62,
  54888.54,
  54869.03,
  54766.18,
  54805.98,
  54738.17,
  54850.26,
  54858.08,
  54824.57,
  54840.54,
  54822.17,
  54905.17,
  54949.05,
  54879.51,
  54934.29,
  54895.7,
  54904.45,
  54900.69,
  54923.44,
  54960.98,
  54971.68,
  54921.34,
  54795.85,
  54808.63,
  54884.41,
  54787.01,
  54825.56,
  54849.38,
  54783.5,
  54812.9,
  54780.54,
  54760,
  54710.78,
  54796.77,
  54831.08,
  54835.79,
  54840.59,
  54780.13,
  54771.65,
  54751.88,
  54794.28,
  54761.09,
  54699.77,
  54798.89,
  54867.98,
  54816.91,
  54818.41,
  54852.25,
  54768.62,
  54754.7,
  54810.6,
  54727.54,
  54665.33,
  54577.97,
  54604.15,
  54620.83,
  54698.23,
  54678.63,
  54673.09,
  54699.18,
  54711.21,
  54662.8,
  54712.44,
  54708.31,
  54717.09,
  54724.36,
  54663.04,
  54743.48,
  54732.95,
  54630.7,
  54708.21,
  54726.67,
  54742.49,
  54740.31,
  54733.72,
  54805.9,
  54838.61,
  54804.38,
  54830.66,
  54818,
  54832.65,
  54834.94,
  54742.28,
  54743.7,
  54834.53,
  54876.67,
  54864.73,
  54850.53,
  54832.36,
  54840.75,
  54837.83,
  54768.64,
  54736.02,
  54741.45,
  54731.59,
  54648.51,
  54644.33,
  54560,
  54581.3,
  54612.08,
  54640.19,
  54711.46,
  54710.02,
  54793.8,
  54748.01,
  54751.49,
  54779.89,
  54768.35,
  54751.65,
  54810.01,
  54813.06,
  54759.76,
  54750.95,
  54798.41,
  54751.31,
  54743.67,
  54687.05,
  54689.81,
  54728.11,
  54791.3,
  54835.63,
  54818.19,
  54792.59,
  54790.15,
  54751.12,
  54772.82,
  54757.41,
  54707.81,
  54682.24,
  54733.59,
  54723.3,
  54677.8,
  54653.89,
  54634.8,
  54628.23,
  54694.25,
  54677.18,
  54657.11,
  54642.54,
  54605.49,
  54570.69,
  54622.26,
  54645.66,
  54670.06,
  54705.05,
  54669.38,
  54607.32,
  54669.01,
  54593.01,
  54595.69,
  54598.85,
  54637.15,
  54638.91,
  54624.78,
  54667.08,
  54687.34,
  54742.93,
  54754.49,
  54679.09,
  54673.47,
  54716.09,
  54744.83,
  54753.88,
  54694.08,
  54723.72,
  54664.61,
  54667.87,
  54684.61,
  54666.36,
  54698.9,
  54720.9,
  54754.61,
  54767.6,
  54718.08,
  54685.32,
  54659.62,
  54722.86,
  54751.14,
  54753.89,
  54737.44,
  54769.52,
  54759.35,
  54761,
  54800.71,
  54756.79,
  54743.06,
  54809.07,
  54766.69,
  54717.11,
  54687.71,
  54685.15,
  54666.09,
  54698.11,
  54716.36,
  54798.89,
  54804.02,
  54814.02,
  54751.03,
  54795.6,
  54864.12,
  54970.04,
  54908.43,
  54868.41,
  54889,
  54870.79,
  54863.61,
  54914.85,
  54916.8,
  54875.12,
  54920.83,
  54945.86,
  54986.3,
  55144.94,
  55105.75,
  55129.19,
  55150.7,
  55136.2,
  55100.96,
  55092.64,
  55070,
  55055.46,
  55098.45,
  55131.9,
  55099.49,
  55077.31,
  55069.61,
  55084.75,
  55086.85,
  55063.19,
  55081.14,
  55126.35,
  55191.22,
  55159.64,
  55171.74,
  55197.88,
  55169.58,
  55125.97,
  55098.28,
  55030.03,
  55011.69,
  55066.98,
  55121.4,
  55054.41,
  55000.01,
  54948.09,
  54955.08,
  54991.01,
  55008.87,
  54987.87,
  54966.59,
  54921.51,
  54880.88,
  54862.24,
  54889.38,
  54872.03,
  54914.87,
  54850,
  54853.99,
  54828.06,
  54777.46,
  54772.84,
  54711.34,
  54718.69,
  54710.09,
  54768.55,
  54711.77,
  54786.7,
  54805.08,
  54864.53,
  54898.73,
  54884.73,
  54870.16,
  54843.35,
  54800.7,
  54822.99,
  54873.65,
  54893.65,
  54977.16,
  54918.2,
  54868.44,
  54982.49,
  54974.46,
  54953.88,
  54983.05,
  54964.02,
  54929.49,
  54958.01,
  54999.74,
  54979.27,
  54976.78,
  54991.46,
  55056.65,
  55064.81,
  55215.74,
  55335.99,
  55279.81,
  55304.12,
  55227.43,
  55253.37,
  55228.24,
  55210.32,
  55175.06,
  55165.08,
  55155.18,
  55118.46,
  55178.84,
  55188.86,
  55103.31,
  55128.31,
  55127.41,
  55146.79,
  55162.61,
  55158.17,
  55193.69,
  55078.16,
  55097.68,
  55098.9,
  55071.67,
  55050.77,
  55058.05,
  55018.68,
  55107.72,
  55235.2,
  55237.3,
  55256.24,
  55179.81
]

var trace2 = {
          y: candles.slice(0, 10).map(candle => candle / 1000),
          type: 'scatter',
          mode: 'lines+markers',
          marker: {color: 'red'},
  // x: ['2017-01-04', '2017-01-05', '2017-01-06', '2017-01-09', '2017-01-10', '2017-01-11', '2017-01-12', '2017-01-13', '2017-01-17', '2017-01-18', '2017-01-19', '2017-01-20', '2017-01-23', '2017-01-24', '2017-01-25', '2017-01-26', '2017-01-27', '2017-01-30', '2017-01-31', '2017-02-01', '2017-02-02', '2017-02-03', '2017-02-06', '2017-02-07', '2017-02-08', '2017-02-09', '2017-02-10', '2017-02-13', '2017-02-14', '2017-02-15'],
  // close: [116.019997, 116.610001, 117.910004, 118.989998, 119.110001, 119.75, 119.25, 119.040001, 120, 119.989998, 119.779999, 120, 120.080002, 119.970001, 121.879997, 121.940002, 121.949997, 121.629997, 121.349998, 128.75, 128.529999, 129.080002, 130.289993, 131.529999, 132.039993, 132.419998, 132.119995, 133.289993, 135.020004, 135.509995],
  // decreasing: {line: {color: '#7F7F7F'}},
  // high: [116.510002, 116.860001, 118.160004, 119.43, 119.379997, 119.93, 119.300003, 119.620003, 120.239998, 120.5, 120.089996, 120.449997, 120.809998, 120.099998, 122.099998, 122.440002, 122.349998, 121.629997, 121.389999, 130.490005, 129.389999, 129.190002, 130.5, 132.089996, 132.220001, 132.449997, 132.940002, 133.820007, 135.089996, 136.270004],
  // increasing: {line: {color: '#17BECF'}},
  // line: {color: 'rgba(31,119,180,1)'},
  // low: [115.75, 115.809998, 116.470001, 117.940002, 118.300003, 118.599998, 118.209999, 118.809998, 118.220001, 119.709999, 119.370003, 119.730003, 119.769997, 119.5, 120.279999, 121.599998, 121.599998, 120.660004, 120.620003, 127.010002, 127.779999, 128.160004, 128.899994, 130.449997, 131.220001, 131.119995, 132.050003, 132.75, 133.25, 134.619995],
  // open: [115.849998, 115.919998, 116.779999, 117.949997, 118.769997, 118.739998, 118.900002, 119.110001, 118.339996, 120, 119.400002, 120.449997, 120, 119.550003, 120.419998, 121.669998, 122.139999, 120.93, 121.150002, 127.029999, 127.980003, 128.309998, 129.130005, 130.539993, 131.350006, 131.649994, 132.460007, 133.080002, 133.470001, 135.520004],
  // type: 'candlestick',
  // xaxis: 'x',
  // yaxis: 'y'
};




var data = [trace1, trace2];

var layout = {
  dragmode: 'zoom',
  margin: {
    r: 10,
    t: 25,
    b: 40,
    l: 60
  },
  showlegend: false,
  xaxis: {
    autorange: true,
    domain: [0, 1],
    range: ['2017-01-03 12:00', '2017-02-15 12:00'],
    rangeslider: {range: ['2017-01-03 12:00', '2017-02-15 12:00']},
    title: 'Date',
    type: 'date'
  },
  yaxis: {
    autorange: true,
    domain: [0, 1],
    range: [114.609999778, 137.410004222],
    type: 'linear'
  }
};

export {
  data, layout
}