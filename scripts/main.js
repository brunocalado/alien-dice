const moduleName = 'alien-dice';

Hooks.once('diceSoNiceReady', (dice3d) => {
  // ---------------------------------------------------------
  // Alien Slow Pulse
  dice3d.addSystem({id:"alien_slow_pulse-aliendice", name:"Alien - Slow Pulse"}, false);
  
  dice3d.addDicePreset({
    type:"db",
    system:"alien_slow_pulse-aliendice", 
    modelFile: 'modules/' + moduleName + '/models/slow_pulse.glb'    
  });

  // ---------------------------------------------------------
  // Alien Fast Pulse
  dice3d.addSystem({id:"alien_fast_pulse-aliendice", name:"Alien - Fast Pulse"}, false);
  
  dice3d.addDicePreset({
    type:"db",
    system:"alien_fast_pulse-aliendice", 
    modelFile: 'modules/' + moduleName + '/models/fast_pulse.glb'    
  });                                                   
 
  // ---------------------------------------------------------
  // Alien d6 Stress
  dice3d.addSystem({id:"alien_stress-aliendice-d6", name:"Stress d6 - Twisted"}, false);
  
  dice3d.addDicePreset({
    type:"d6",
    system:"alien_stress-aliendice-d6", 
    modelFile: 'modules/' + moduleName + '/models/stress_twisted.glb'    
  });  

  // ---------------------------------------------------------
  // Alien ds Stress
  dice3d.addSystem({id:"alien_stress-aliendice-ds", name:"Stress ds - Twisted"}, false);
  
  dice3d.addDicePreset({
    type:"ds",
    system:"alien_stress-aliendice-ds", 
    modelFile: 'modules/' + moduleName + '/models/stress_twisted.glb'    
  });  
  
});
