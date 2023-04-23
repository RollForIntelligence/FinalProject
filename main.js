let species = document.getElementById('species').value
if (species != '') {
    
}

function sort() {
 
    let nodes = Array.from(document.querySelectorAll(".block"))
    let qualifies = false
    let criteria = [[[]]]  // 'criteria' should be a list of 'ors', which are described below
    if (criteria[0][0].length != 0) {
        for (let i = 0; i < nodes.length; i++) {
            
            let node = nodes[i]
            
            qualifies = true  // Starts at true, set to false if determined
            let dummyval = ''

            let innerNodes = []
            
            for (let or = 0; or < criteria.length; or++) { // Each 'or' should be a list of 'ands', which are described below.
                let current_or = criteria[or]
                qualifies = true
                
                for (let an = 0; an < current_or.length; an++) {// Each 'and' should be a paired set of values, one determining the section it corresponds to and the other declaring the desired value
                    let ands = current_or[an]
                    
                    if (ands[0] == 'species') { // species is found in an h1 with a class of the same name
                        if (node.querySelector(".species").textContent.indexOf(ands[1]) > -1) {
                            qualifies = true
                        }
                        else {
                            qualifies = false
                        }
                    }
        
                    else if (ands[0] == 'size') { // The size is found in the head h2
                        if (node.querySelector(".head").textContent.indexOf(ands[1]) > -1) {
                            qualifies = true
                        }
                        else {
                            qualifies = false
                        }    
                    }
                    
                    else if (ands[0] == 'category') { // The category is found in the head h2
                        if (node.querySelector(".head").textContent.indexOf(ands[1]) > -1) {
                            qualifies = true
                        }
                        else {
                            qualifies = false
                        }
                    }
                    
                    else if (ands[0] == 'class') { // The classification is found in the head h2
                        if (node.querySelector(".head").textContent.indexOf(ands[1]) > -1) {
                            qualifies = true
                        }
                        else {
                            qualifies = false
                        }
                    }

                    else if (ands[0] == 'alignment') { // The alignment is found in the head h2
                        if (node.querySelector(".head").textContent.indexOf(ands[1]) > -1) {
                            qualifies = true
                        }
                        else {
                            qualifies = false
                        }    
                    }
                    
                    else if (ands[0] == 'ac') { // ac is found after a span with a class of the same name
                        
                        dummyval = node.querySelector(".AC").textContent
                        dummyval = dummyval.split("Armor Class ")[1]
                        
                        if (dummyval.indexOf(' ') > -1) {
                            dummyval = dummyval.split(" ")[0]
                        }

                        dummyval = dummyval - 0

                        // A range-based 'and' should have three members; the first to dictate the position and the others to declare the bounds
                        if (dummyval >= ands[1] && dummyval <= ands[2]) {
                            qualifies = true
                        }
                        else {
                            qualifies = false
                        }   
                    }     
                    
                    else if (ands[0] == 'hp') { // hp is found after a span with a class of the same name
                        
                        dummyval = node.querySelector(".HP").textContent
                        dummyval = dummyval.split("Hit Points ")[1]

                        if (dummyval.indexOf(' ') > -1) {
                            dummyval = dummyval.split(" ")[0]
                        }

                        dummyval = dummyval - 0

                        // A range-based 'and' should have three members; the first to dictate the position and the others to declare the bounds
                        if (dummyval >= ands[1] && dummyval <= ands[2]) {
                            qualifies = true
                        }
                        else {
                            qualifies = false
                        }
                    }        
                    
                    else if (ands[0] == 'str') { // str is found in a td with a class of the same name
                        
                        dummyval = node.querySelector(".str").textContent
                        if (dummyval.indexOf(' ') > -1) {
                            dummyval = dummyval.split(" ")[0]
                        }

                        dummyval = dummyval - 0

                        // A range-based 'and' should have three members; the first to dictate the position and the others to declare the bounds
                        if (dummyval >= ands[1] && dummyval <= ands[2]) {
                            qualifies = true
                        }
                        else {
                            qualifies = false
                        }
                    }        
                    
                    else if (ands[0] == 'dex') { // dex is found in a td with a class of the same name
                        
                        dummyval = node.querySelector(".dex").textContent
                        if (dummyval.indexOf(' ') > -1) {
                            dummyval = dummyval.split(" ")[0]
                        }

                        dummyval = dummyval - 0

                        // A range-based 'and' should have three members; the first to dictate the position and the others to declare the bounds
                        if (dummyval >= ands[1] && dummyval <= ands[2]) {
                            qualifies = true
                        }
                        else {
                            qualifies = false
                        }
                    }        
                    
                    else if (ands[0] == 'con') { // con is found in a td with a class of the same name
                        
                        dummyval = node.querySelector(".con").textContent
                        if (dummyval.indexOf(' ') > -1) {
                            dummyval = dummyval.split(" ")[0]
                        }

                        dummyval = dummyval - 0

                        // A range-based 'and' should have three members; the first to dictate the position and the others to declare the bounds
                        if (dummyval >= ands[1] && dummyval <= ands[2]) {
                            qualifies = true
                        }
                        else {
                            qualifies = false
                        }
                    }        
                    
                    else if (ands[0] == 'int') { // int is found in a td with a class of the same name
                        
                        dummyval = node.querySelector(".int").textContent
                        if (dummyval.indexOf(' ') > -1) {
                            dummyval = dummyval.split(" ")[0]
                        }

                        dummyval = dummyval - 0

                        // A range-based 'and' should have three members; the first to dictate the position and the others to declare the bounds
                        if (dummyval >= ands[1] && dummyval <= ands[2]) {
                            qualifies = true
                        }
                        else {
                            qualifies = false
                        }
                    }        
                    
                    else if (ands[0] == 'wis') { // wis is found in a td with a class of the same name
                        
                        dummyval = node.querySelector(".wis").textContent
                        if (dummyval.indexOf(' ') > -1) {
                            dummyval = dummyval.split(" ")[0]
                        }

                        dummyval = dummyval - 0

                        // A range-based 'and' should have three members; the first to dictate the position and the others to declare the bounds
                        if (dummyval >= ands[1] && dummyval <= ands[2]) {
                            qualifies = true
                        }
                        else {
                            qualifies = false
                        }
                    }
                    
                    else if (ands[0] == 'cha') { // cha is found in a td with a class of the same name
                        
                        dummyval = node.querySelector(".cha").textContent
                        if (dummyval.indexOf(' ') > -1) {
                            dummyval = dummyval.split(" ")[0]
                        }

                        dummyval = dummyval - 0

                        // A range-based 'and' should have three members; the first to dictate the position and the others to declare the bounds
                        if (dummyval >= ands[1] && dummyval <= ands[2]) {
                            qualifies = true
                        }
                        else {
                            qualifies = false
                        }
                    }        
                    
                    else if (ands[0] == 'speed') { // speed is found after a span with a class of the same name
                        if (node.querySelector(".SPD").textContent.indexOf(ands[1]) > -1) {
                            qualifies = true
                        }
                        else {
                            qualifies = false
                        }
                    }    

                    else if (ands[0] == 'SaveProfs') { // SaveProfs are found after a span with a class of the same name
                        if (node.querySelectorAll(".SaveProfs").length > 0) {
                            if (node.querySelector(".SaveProfs").textContent.indexOf(ands[1]) > -1) {
                                qualifies = true
                            }
                            else {
                                qualifies = false
                            }
                        }
                        else {
                            qualifies = false
                        }
                    }    

                    else if (ands[0] == 'SkillProfs') { // SkillProfs are found after a span with a class of the same name
                        if (node.querySelectorAll(".SkillProfs").length > 0) {
                            if (node.querySelector(".SkillProfs").textContent.indexOf(ands[1]) > -1) {
                                qualifies = true
                            }
                            else {
                                qualifies = false
                            }
                        }
                        else {
                            qualifies = false
                        }
                    }    

                    else if (ands[0] == 'Vulns') { // Vulns are found after a span with a class of the same name
                        if (node.querySelectorAll(".Vulns").length > 0) {
                            if (node.querySelector(".Vulns").textContent.indexOf(ands[1]) > -1) {
                                qualifies = true
                            }
                            else {
                                qualifies = false
                            }
                        }
                        else {
                            qualifies = false
                        }
                    }    

                    else if (ands[0] == 'DmgResist') { // DmgResist are found after a span with a class of the same name
                        if (node.querySelectorAll(".DmgResist").length > 0) {
                            if (node.querySelector(".DmgResist").textContent.indexOf(ands[1]) > -1) {
                                qualifies = true
                            }
                            else {
                                qualifies = false
                            }
                        }
                        else {
                            qualifies = false
                        }
                    }    

                    else if (ands[0] == 'DmgImmune') { // DmgImmune are found after a span with a class of the same name
                        if (node.querySelectorAll(".DmgImmune").length > 0) {
                            if (node.querySelector(".DmgImmune").textContent.indexOf(ands[1]) > -1) {
                                qualifies = true
                            }
                            else {
                                qualifies = false
                            }
                        }
                        else {
                            qualifies = false
                        }
                    }    

                    else if (ands[0] == 'CondImmune') { // CondImmune are found after a span with a class of the same name
                        if (node.querySelectorAll(".CondImmune").length > 0) {
                            if (node.querySelector(".CondImmune").textContent.indexOf(ands[1]) > -1) {
                                qualifies = true
                            }
                            else {
                                qualifies = false
                            }
                        }
                        else {
                            qualifies = false
                        }
                    }    

                    else if (ands[0] == 'Senses') { // Senses are found after a span with a class of the same name
                        if (node.querySelector(".Senses").textContent.indexOf(ands[1]) > -1) {
                            qualifies = true
                        }
                        else {
                            qualifies = false
                        }
                    }    

                    else if (ands[0] == 'Langs') { // Langs are found after a span with a class of the same name
                        if (node.querySelector(".Langs").textContent.indexOf(ands[1]) > -1) {
                            qualifies = true
                        }
                        else {
                            qualifies = false
                        }
                    }    
                    
                    else if (ands[0] == 'Challenge') { // Challenge is found after a span with a class of the same name
                        dummyval = node.querySelector(".HP").textContent
                        dummyval = dummyval.split("Challenge ")[1]

                        if (dummyval.indexOf(' ') > -1) {
                            dummyval = dummyval.split(" ")[0]
                        }

                        if ('/' in dummyval) {
                            if ('2' in dummyval)
                                {dummyval = 0.5}
                            else if ('4' in dummyval)
                                {dummyval = 0.25}
                            else
                                {dummyval = 0.125}
                        }
                        else
                            dummyval = dummyval - 0

                        // A range-based 'and' should have three members; the first to dictate the position and the others to declare the bounds
                        if (dummyval >= ands[1] && dummyval <= ands[2]) {
                            qualifies = true
                        }
                        else {
                            qualifies = false
                        }
                    }    
                    
                    else if (ands[0] == 'Reactions') { // The Reactions block has a class of that name
                        if (node.querySelectorAll(".Reactions").length > 0) {
                            innerNodes = Array.from(node.querySelector(".Reactions").children)
                        }
                        else {
                            qualifies = false
                            break
                        }

                        qualifies = false
                        for (let i = 0; i < innerNodes.length; i++) {
                            dummyval = innerNodes[i].textContent
        
                            if (dummyval.indexOf(ands[1]) > -1) {
                                qualifies = true
                            }
                        }
                    }            
                    
                    else if (ands[0] == 'Legends') { // The Legends block has a class of that name
                        if (node.querySelectorAll(".Legends").length > 0) {
                            innerNodes = Array.from(node.querySelector(".Legends").children)
                        }
                        else {
                            qualifies = false
                            break
                        }

                        qualifies = false
                        for (let i = 0; i < innerNodes.length; i++) {
                            dummyval = innerNodes[i].textContent
        
                            if (dummyval.indexOf(ands[1]) > -1) {
                                qualifies = true
                            }
                        }
                    }            
                    
                    else if (ands[0] == 'Features') { // The Features block has a class of that name
                        if (node.querySelectorAll(".Features").length > 0) {
                            innerNodes = Array.from(node.querySelector(".Features").children)
                        }
                        else {
                            qualifies = false
                            break
                        }

                        qualifies = false
                        for (let i = 0; i < innerNodes.length; i++) {
                            dummyval = innerNodes[i].textContent
        
                            if (dummyval.indexOf(ands[1]) > -1) {
                                qualifies = true
                            }
                        }
                    }                
        
                    else if (ands[0] == 'Description') { // The Description block has a class of that name
                        if (node.querySelectorAll(".Description").length > 0) {
                            innerNodes = Array.from(node.querySelector(".Description").children)
                        }
                        else {
                            qualifies = false
                            break
                        }

                        qualifies = false
                        for (let i = 0; i < innerNodes.length; i++) {
                            dummyval = innerNodes[i].textContent
        
                            if (dummyval.indexOf(ands[1]) > -1) {
                                qualifies = true
                            }
                        }
                    }                
        
                    if (!qualifies)
                        {break}
                }

                if (qualifies) {// If, after the criteria has been checked, the file still qualifies, exit the loop
                    break
                }
            }
            if (qualifies) {
                node.style.display = 'inline-block'
            }
            else {
                node.style.display = 'none'
            }
        }
    }
    else {
        for (let i = 0; i < nodes.length; i++) {
            let node = nodes[i]
            node.style.display = 'none'
        }
    }

    alert("Sorter Works")
    
}

function displayForm() {
    document.querySelector(".FilterForm").style.display = 'block'
    document.querySelector(".LinksToPages").style.display = 'none'
}

function hideForm() {
    document.querySelector(".FilterForm").style.display = 'none'
    document.querySelector(".LinksToPages").style.display = 'block'
}

let TesterNode = document.querySelector(".block")
let TesterPosition = "Features"
let TesterValue = "Keen Sight"

document.getElementById("ADMINTEST1").onclick = sort

function TESTER() {
    alert("WORKS")
}

document.getElementById("SetPageOne").onclick = TESTER
document.getElementById("SetPageTwo").onclick = displayForm
document.getElementById("SetPageThree").onclick = displayForm
document.getElementById("SetPageFour").onclick = displayForm

document.getElementById("Cancel").onclick = hideForm